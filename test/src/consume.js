import test from 'ava';

import {range} from '@iterable-iterator/range';
import {list} from '@iterable-iterator/list';
import {consume} from '../../src/index.js';

test('consume', (t) => {
	const iterator = range(100);

	consume(iterator, 37);

	const output = list(iterator);

	t.deepEqual(output, list(range(37, 100)));
});
