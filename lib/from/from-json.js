import through2 from 'through2';

export default function fromJSON() {
  return through2.obj({ objectMode: true }, (data, enc, cb) => {
    // const string = data.toString();
    // const result = string
    //   .replace(/\n/, '')
    //   .toUpperCase()
    //   .split(/[ \t]/);
    //
    // this.push(result);
    cb();
  });
}
