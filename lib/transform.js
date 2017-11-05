import split from 'split2';
import chalk from 'chalk';
import parseCSV from './parse-csv';
import toJSON from './to-json';

export default function(inputType, outputType) {
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
