let should = require('should')
let { time } = require('../index')

describe('time test', (done) => {
	it('getUnix', (done) =>{
		let result = time.getUnix()
		result.length.should.be.equal(10)
		done()
	})
})