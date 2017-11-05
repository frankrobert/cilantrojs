import transform from './transform';
import { processDirectory } from './util';

export default function Cilantro(input, output) {
  if (!(this instanceof Cilantro)) return new Cilantro(input, output);
  this.files = processDirectory(input);
  this.input = input;
  this.output = output;
  this.instreams = null;
  this.outstreams = null;

  return this;
}

Cilantro.prototype = {
  transform
};
