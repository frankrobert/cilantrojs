import through2 from 'through2';

export default function toJSON(stream) {
  const objs = [];

  return through2.obj(
    (data, enc, cb) => {
      objs.push(data);
      cb(null, null);
    },
    cb => {
      stream.push(JSON.stringify(objs, undefined, 2));
      cb();
    }
  );
}
