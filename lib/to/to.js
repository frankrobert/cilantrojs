import { createOutstreams } from '../util';
import toJSON from './to-json';
import toCSV from './to-csv';

function To(type, self) {
  self.outstreams = createOutstreams(self.files, self.output, type);
  switch (type) {
    case 'json':
      return toJSON;
    case 'csv':
      return toCSV;

    default:
      return this;
  }
}

export default To;
