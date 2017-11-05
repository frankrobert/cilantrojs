import { createOutstreams } from './util';
import toJSON from './transforms/to-json';

function To(type, self) {
  switch (type) {
    case 'json': {
      self.outstreams = createOutstreams(self.files, self.output, type);
      return toJSON;
    }

    default: {
      return this;
    }
  }
}

export default To;
