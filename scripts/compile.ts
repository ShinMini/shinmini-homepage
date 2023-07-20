/* eslint-disable @typescript-eslint/ban-ts-comment */
import { exec as execCb } from 'child_process';
import Spinnies from 'spinnies';
import { promisify } from 'util';
const exec = promisify(execCb);
const spinnies = new Spinnies();

/* eslint-disable no-console */
async function lint(): Promise<boolean> {
  spinnies.add('lint', { text: 'Vanquishing lint...' });
  try {
    /**
     * will throw error if there is a lint error, not lint warning
     * don't print lint warning since it's noisy
     */
    await exec('node ./node_modules/.bin/eslint --ext .ts,.tsx --cache --quiet --color .');
    spinnies.succeed('lint', { text: 'No lint errors!' });
    return true;
  } catch (e) {
    spinnies.fail('lint', { text: 'Lint error detected 🤡' });

    // @ts-ignore
    const message = e?.stdout?.toString();
    if (message) {
      console.log(message);
    }
    return false;
  }
}

async function format(): Promise<boolean> {
  spinnies.add('format', { text: 'Formatting it...' });
  try {
    const { stdout } = await exec('node ./node_modules/.bin/prettier --write .');
    if (stdout) {
      console.log(stdout);
      spinnies.fail('format', { text: "Couldn't format 😔" });
      return false;
    }
    spinnies.succeed('format', { text: 'All formatted!' });
    return true;
  } catch (e) {
    spinnies.fail('format', { text: "Couldn't format 😔" });

    // @ts-ignore
    console.log(e.stdout);
    return false;
  }
}

async function compile(): Promise<boolean> {
  spinnies.add('compile', { text: 'Compiling it...' });
  try {
    const { stdout } = await exec('node ./node_modules/.bin/tsc');
    if (stdout) {
      console.log(stdout);
      spinnies.fail('compile', { text: "Couldn't compile 😔" });
      return false;
    }
    spinnies.succeed('compile', { text: 'All compiled!' });
    return true;
  } catch (e) {
    spinnies.fail('compile', { text: "Couldn't compile 😔" });

    // @ts-ignore
    console.log(e.stdout);
    return false;
  }
}

async function lintAndCompile() {
  const results: boolean[] = await Promise.all([lint(), compile(), format()]);
  if (!results.every(Boolean)) {
    return process.exit(1);
  }
  process.exit(0);
}

lintAndCompile().catch(_e => {
  // TODO
});
/* eslint-enable no-console */
