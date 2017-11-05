import { createInstreams } from './util';
import transformCSV from './transforms/transform-csv';
import transformJSON from './transforms/transform-json';

function From(type, self) {
  switch (type) {
    case 'csv': {
      self.instreams = createInstreams(self.files, self.input, type);
      return transformCSV;
    }
    case 'json': {
      self.instreams = createInstreams(self.files, self.input, type);
      return transformJSON;
    }

    default: {
      return this;
    }
  }
}

export default From;
