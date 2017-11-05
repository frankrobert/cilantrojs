import { createInstreams, processDirectory } from '../util';
import fromCSV from './from-csv';
import fromJSON from './from-json';

function From(type, self) {
  self.files = processDirectory(self.input, type);
  self.instreams = createInstreams(self.files, self.input, type);

  switch (type) {
    case 'csv':
      return fromCSV;
    case 'json':
      return fromJSON;

    default:
      return this;
  }
}

export default From;
