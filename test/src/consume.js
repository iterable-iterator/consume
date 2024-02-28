import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {range} from '@iterable-iterator/range';
import {list} from '@iterable-iterator/list';
import {consume} from '#module';

test('consume', (t) => {
	const iterator = iter(range(100));

	consume(iterator, 37);

	const output = list(iterator);

	t.deepEqual(output, list(range(37, 100)));
});
