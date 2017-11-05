import through2 from 'through2';

export default function transformCSV() {
  let templateKeys = [];
  let parseHeadline = true;

  return through2.obj((line, enc, cb) => {
    if (parseHeadline) {
      templateKeys = line.toString().split(',');
      parseHeadline = false;

      return cb(null, null);
    }

    const entries = line.toString().split(',');
    const obj = {};

    templateKeys.forEach((el, index) => {
      obj[el] = entries[index]; // eslint-disable-line no-param-reassign
    });

    return cb(null, obj);
  });
}
