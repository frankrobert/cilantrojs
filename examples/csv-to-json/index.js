import cilantro from '../../index';

const input = 'examples/csv-data';
const output = 'examples/csv-data';

cilantro({ input, output }).transform('csv', 'json');
