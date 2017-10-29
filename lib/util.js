import fs from 'fs';
import path from 'path';

// TODO: Split methods up more
// TODO Multiple sort types
// TODO: Ability to process folder/file/blob
export function processDirectory(dir) {
  console.log('DIRECTORY', dir);
  return fs
    .readdirSync(dir)
    .sort(
      (a, b) =>
        fs.statSync(path.join(dir, a)).size -
        fs.statSync(path.join(dir, b)).size
    )
    .filter(file => /\.txt$/i.test(file))
    .map(filename => filename.replace('.txt', ''));
}

// TODO: Make this flexible and more useful
export function createInstreams(files, dir) {
  return files.map(filename => {
    return {
      filename,
      stream: fs.createReadStream(path.join(dir, `${filename}.txt`))
    };
  });
}

export function createOutstreams(fileNames, dir) {
  return fileNames.map(filename =>
    fs.createWriteStream(path.join(dir, `${filename}.js`))
  );
}
