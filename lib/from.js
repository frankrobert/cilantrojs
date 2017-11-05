import { createInstreams } from './util';
import fromCSV from './transforms/from-csv';

function From(type, self) {
  switch (type) {
    case 'csv': {
      self.instreams = createInstreams(self.files, self.input, type);
      return fromCSV;
    }

    default: {
      return this;
    }
  }
}

export default From;
