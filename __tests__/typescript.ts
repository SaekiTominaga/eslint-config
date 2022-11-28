export default class Test {
	#foo: string;

	/**
	 * @param {string} foo - foo
	 */
	constructor(foo: string) {
		this.#foo = foo;
	}
}
