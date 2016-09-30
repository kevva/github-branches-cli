#!/usr/bin/env node
'use strict';
const meow = require('meow');
const githubBranches = require('github-branches');

const cli = meow(`
	Usage
	  $ github-branches kevva/github-branches
	  $ github-branches kevva/github-branches --token=523ef69119eadg12

	Options
	  -t, --token  GitHub authentication token
`, {
	string: ['token'],
	alias: {t: 'token'}
});

if (cli.input.length === 0) {
	console.error('Specify a repository');
	process.exit(1);
}

githubBranches(cli.input[0], cli.flags).then(data => {
	for (const x of data) {
		console.log(x.name);
	}
});
