const fs = require('fs');
const path = require('path');

// TODO: Split methods up more
// TODO Add argument to sort files
// by multiple params if providing a folder of files
// TODO: Add better folder / file parsing
function processDirectory(dir) {
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
function createInstreams(files, dir) {
  return files.map(filename => {
    return {
      filename,
      stream: fs.createReadStream(path.join(dir, `${filename}.txt`))
    };
  });
}

function createOutstreams(fileNames, dir) {
  return fileNames.map(filename =>
    fs.createWriteStream(path.join(dir, `${filename}.js`))
  );
}

module.exports = {
  processDirectory,
  createInstreams,
  createOutstreams
};
