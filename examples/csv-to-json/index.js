import cilantro from '../../index';

const input = '/home/frank/Documents/Projects/Cilantro/examples/csv-data';
const output = '/home/frank/Documents/Projects/Cilantro/examples/csv-data';

cilantro(input, output).transform('csv', 'json');
