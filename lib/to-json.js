const through2 = require('through2');

const toJSON = () => {
  const objs = [];

  return through2.obj(
    (data, enc, cb) => {
      objs.push(data);
      cb(null, null);
    },
    cb => {
      this.push(JSON.stringify(objs, undefined, 2));
      cb();
    }
  );
};

module.exports = toJSON;
