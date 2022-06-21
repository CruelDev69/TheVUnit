class TheVUnitError extends Error {
	/**
	 * TheVUnitError
	 * @param {String} name
	 * @param {String} tip
	 */

	constructor(name, tip) {
		tip = tip || 'Join TheVUnit Server: https://discord.gg/hW5yWHgEtf'

		const msg = '"' + name + '"' + '\n' + 'Tip: ' + tip + '\n'
		super(msg)
	}
}

Object.defineProperty(TheVUnitError.prototype, 'name', {
	value: 'TheVUnitError'
})

module.exports = TheVUnitError
