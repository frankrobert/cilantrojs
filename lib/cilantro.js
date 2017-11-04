import split from 'split2';
import chalk from 'chalk';
import { processDirectory, createInstreams, createOutstreams } from './util.js';
import parseCSV from './parse-csv.js';
import toJSON from './to-json.js';

export default function Cilantro(input, output) {
  if (!(this instanceof Cilantro)) return new Cilantro(input, output);
  const files = processDirectory(input);

  this.instreams = createInstreams(files, input);
  this.outstreams = createOutstreams(files, output);

  return this;
}

Cilantro.prototype = {
  transform
};

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
        // TODO: Add argument for custom logging
        console.timeEnd(
          `[${chalk.yellow(index + 1)}/${chalk.red(
            this.instreams.length
          )}] Finished Parsing ${chalk.green(file.filename)}`
        )
      )
      .on('error', err =>
        // TODO: Add argument for custom logging
        console.log('Error Parsing File: ', file.filename, err)
      );
  });
}
