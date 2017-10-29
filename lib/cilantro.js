const split = require('split2');
const chalk = require('chalk');
const util = require('./util.js');
const parseCSV = require('./parse-csv.js');
const toJSON = require('./to-json.js');

function Cilantro(input, output) {
  // TODO: Maybe add some default
  // config params like Axios
  // TODO: Maybe feed the input file/directory
  // to the main lib like Moment with time
  const files = util.processDirectory(input);
  this.instreams = util.createInstreams(files, input);
  this.outstreams = util.createOutstreams(files, output);
}

function transform(inputType, outputType) {
  let startTransformation;
  let endTransformation;

  if (inputType === 'csv') startTransformation = parseCSV;
  if (outputType === 'json') endTransformation = toJSON;

  // TODO abstract this and add custom logging
  this.instreams.forEach((file, index) => {
    console.time(
      `[${chalk.yellow(index + 1)}/${chalk.red(
        this.instreams.length
      )}] Finished Parsing ${chalk.green(file.filename)}`
    );
    file.stream
      .pipe(split())
      .pipe(startTransformation())
      .pipe(endTransformation())
      .pipe(this.outstreams[index])
      .on('finish', () =>
        console.timeEnd(
          `[${chalk.yellow(index + 1)}/${chalk.red(
            this.instreams.length
          )}] Finished Parsing ${chalk.green(file.filename)}`
        )
      ) // TODO: Add argument for custom logging
      .on('error', err =>
        console.log('Error Parsing File: ', file.filename, err)
      ); // TODO: Add argument for custom logging
  });
}

const cilantro = new Cilantro();
cilantro.transform = transform;

module.exports = cilantro;
module.exports = cilantro;

// Allow use of default import syntax in TypeScript
module.exports.default = cilantro;
