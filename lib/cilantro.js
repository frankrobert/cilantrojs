const split = require('split2');
const chalk = require('chalk');
const util = require('./util.js');
const parseCSV = require('./parse-csv.js');
const toJSON = require('./to-json.js');

function Cilantro() {
  // TODO: Maybe add some default
  // config params like Axios
  // TODO: Maybe feed the input file/directory
  // to the main lib like Moment with time
}

Cilantro.prototype.csvToJson = function(inputPath, outputPath) {
  const files = util.processDirectory(inputPath);
  const instreams = util.createInstreams(files, inputPath);
  const outstreams = util.createOutstreams(files, outputPath);

  // TODO abstract this and add custom logging
  instreams.forEach((file, index) => {
    console.time(
      `[${chalk.yellow(index + 1)}/${chalk.red(
        instreams.length
      )}] Finished Parsing ${chalk.green(file.filename)}`
    );
    file.stream
      .pipe(split())
      .pipe(parseCSV())
      .pipe(toJSON())
      .pipe(outstreams[index])
      .on('finish', () =>
        console.timeEnd(
          `[${chalk.yellow(index + 1)}/${chalk.red(
            instreams.length
          )}] Finished Parsing ${chalk.green(file.filename)}`
        )
      ) // TODO: Add argument for custom logging
      .on('error', err =>
        console.log('Error Parsing File: ', file.filename, err)
      ); // TODO: Add argument for custom logging
  });
};

const cilantro = new Cilantro();

module.exports = cilantro;
module.exports = cilantro;

// Allow use of default import syntax in TypeScript
module.exports.default = cilantro;
