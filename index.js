#!/usr/bin/env node

require('babel-register')({
	babelrc: false,
	only: /src/,
	presets: [
		['env', { node: 'current' }]
	]
})

require('./src/run')
