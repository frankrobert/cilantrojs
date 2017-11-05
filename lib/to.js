import { createOutstreams } from './util';
import transformJSON from './transforms/transform-json';
import transformCSV from './transforms/transform-csv';

function To(type, self) {
  switch (type) {
    case 'json': {
      self.outstreams = createOutstreams(self.files, self.output, type);
      return transformJSON;
    }
    case 'csv': {
      self.outstreams = createOutstreams(self.files, self.output, type);
      return transformCSV;
    }

    default: {
      return this;
    }
  }
}

export default To;
