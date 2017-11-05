import transform from './transform';
import { processDirectory, createInstreams, createOutstreams } from './util';

export default function Cilantro(input, output) {
  if (!(this instanceof Cilantro)) return new Cilantro(input, output);
  const files = processDirectory(input);

  this.instreams = createInstreams(files, input);
  this.outstreams = createOutstreams(files, output);

  return this;
}

Cilantro.prototype = {
  transform
};
