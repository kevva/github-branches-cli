import test from 'ava';
import execa from 'execa';

test('get branches', async t => {
	t.regex(await execa.stdout('./cli.js', ['kevva/github-branches']), /master/);
});
