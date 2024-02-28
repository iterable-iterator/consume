import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {consume} from '#module';

test('consume', (t) => {
	const iterator = iter(range(100));

	consume(iterator, 37);

	const output = list(iterator);

	t.deepEqual(output, list(range(37, 100)));
});
