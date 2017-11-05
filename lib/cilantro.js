import transform from './transform';
import { createInstreams, createOutstreams } from './util';
import from from './from/from';
import to from './to/to';

export default function Cilantro(options) {
  if (!(this instanceof Cilantro)) return new Cilantro(options);

  const keys = Object.keys(options);

  this.files = null;
  this.input = null;
  this.output = null;
  this.instreams = null;
  this.outstreams = null;

  if (keys.length === 0 && options.constructor === Object) return this;

  if (keys.includes('input')) this.input = options.input;
  if (keys.includes('output')) this.output = options.output;

  return this;
}

Cilantro.prototype = {
  transform,
  createInstreams,
  createOutstreams,
  from,
  to
};
