import test from 'ava';
import execa from 'execa';

test('show help screen', async t => {
	t.regex(await execa.stdout('./cli.js', ['--help']), /Get all branches from a GitHub repository/);
});

test('show version', async t => {
	t.is(await execa.stdout('./cli.js', ['--version']), require('./package.json').version);
});

test('get branches', async t => {
	t.regex(await execa.stdout('./cli.js', ['kevva/github-branches']), /master/);
});
