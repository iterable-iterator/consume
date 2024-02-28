import test from 'ava';

import {iter} from '@iterable-iterator/iter';
import {list} from '@iterable-iterator/list';
import {next} from '@iterable-iterator/next';
import {range} from '@iterable-iterator/range';

import {exhaust} from '#module';

test('exhaust', (t) => {
	const iterator = iter(range(0, 100, 1));

	const head = function* (iterator, n) {
		for (const _ of range(n)) yield next(iterator);
	};

	exhaust(head(iterator, 37));

	const output = list(iterator);

	t.deepEqual(output, list(range(37, 100, 1)));
});
