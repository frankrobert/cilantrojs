import fs from 'fs';
import path from 'path';

// TODO: Split methods up more
// TODO Multiple sort types
// TODO: Ability to process folder/file/blob
export function processDirectory(dir, fileType) {
  const re = new RegExp(`\.${fileType}$`, 'i');

  return fs
    .readdirSync(dir)
    .sort(
      (a, b) =>
        fs.statSync(path.join(dir, a)).size -
        fs.statSync(path.join(dir, b)).size
    )
    .filter(file => re.test(file))
    .map(filename => filename.replace(re, ''));
}

// TODO: Make this flexible and more useful
export function createInstreams(files, dir, fileType) {
  return files.map(filename => {
    return {
      filename,
      stream: fs.createReadStream(path.join(dir, `${filename}.${fileType}`))
    };
  });
}

export function createOutstreams(fileNames, dir, fileType) {
  return fileNames.map(filename =>
    fs.createWriteStream(path.join(dir, `${filename}.${fileType}`))
  );
}
