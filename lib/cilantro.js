import split from 'split2';
import chalk from 'chalk';
import { processDirectory, createInstreams, createOutstreams } from './util.js';
import parseCSV from './parse-csv.js';
import toJSON from './to-json.js';

let instreams;
let outstreams;

export function cilantro(input, output) {
  // TODO: Add settings param re: cilantro.settings({})
  const files = processDirectory(input);
  instreams = createInstreams(files, input);
  outstreams = createOutstreams(files, output);
}

export function transform(inputType, outputType) {
  let startTransformation;
  let endTransformation;

  if (inputType === 'csv') startTransformation = parseCSV;
  if (outputType === 'json') endTransformation = toJSON;

  // TODO abstract this and add custom logging
  this.instreams.forEach((file, index) => {
    console.time(
      `[${chalk.yellow(index + 1)}/${chalk.red(
        instreams.length
      )}] Finished Parsing ${chalk.green(file.filename)}`
    );
    file.stream
      .pipe(split())
      .pipe(startTransformation())
      .pipe(endTransformation())
      .pipe(outstreams[index])
      .on('finish', () =>
        // TODO: Add argument for custom logging
        console.timeEnd(
          `[${chalk.yellow(index + 1)}/${chalk.red(
            instreams.length
          )}] Finished Parsing ${chalk.green(file.filename)}`
        )
      )
      .on('error', err =>
        // TODO: Add argument for custom logging
        console.log('Error Parsing File: ', file.filename, err)
      );
  });
}
