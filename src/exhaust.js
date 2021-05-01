/**
 * Exhausts the input iterator.
 *
 * @example
 * let it = range( 1000 ) ;
 * exhaust( it ) ;
 * list( it ) ; // returns []
 *
 * @param {Iterator} iterator - The input iterator.
 *
 */
export default function exhaust(iterator) {
	// eslint-disable-next-line no-empty
	while (!iterator.next().done) {}
}
