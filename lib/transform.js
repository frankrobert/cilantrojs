import split from 'split2';
import chalk from 'chalk';
import to from './to/to';
import from from './from/from';

export default function(inputType, outputType) {
  const From = from(inputType, this);
  const To = to(outputType, this);

  this.instreams.forEach((file, index) => {
    // Start timer
    console.time(
      `[${chalk.yellow(index + 1)}/${chalk.red(
        this.instreams.length
      )}] Finished Parsing ${chalk.green(file.filename)}`
    );

    file.stream
      .pipe(split())
      .pipe(From())
      .pipe(To())
      .pipe(this.outstreams[index])
      .on('finish', () =>
        // End timer
        console.timeEnd(
          `[${chalk.yellow(index + 1)}/${chalk.red(
            this.instreams.length
          )}] Finished Parsing ${chalk.green(file.filename)}`
        )
      )
      .on('error', err =>
        console.log('Error Parsing File: ', file.filename, err)
      );
  });
}
