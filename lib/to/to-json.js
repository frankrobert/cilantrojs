import through2 from 'through2';

export default function toJSON() {
  const objs = [];

  return through2.obj(
    (data, enc, cb) => {
      objs.push(data);
      cb(null, null);
    },
    function(cb) {
      this.push(JSON.stringify(objs, undefined, 2));
      cb();
    }
  );
}
