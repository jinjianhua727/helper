let moment = require('moment')

const getUnix = ( date = new Date()) => moment(date).format('X')

module.exports = {
	getUnix
}