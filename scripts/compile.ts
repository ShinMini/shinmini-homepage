import { exec as execCb } from 'child_process';
import Spinnies from 'spinnies';
import { promisify } from 'util';

const exec = promisify(execCb);
const spinnies = new Spinnies();

async function lint(): Promise<boolean> {
  spinnies.add('lint', { text: 'Vanquishing lint...' });
  try {
    await exec('node ./node_modules/.bin/eslint --ext .ts,.tsx --cache --quiet --color .');
    spinnies.succeed('lint', { text: 'No lint errors!' });
    return true;
  } catch (e) {
    spinnies.fail('lint', { text: 'Lint error detected 🤡' });

    if (isIncludeStdout(e)) {
      const message = e.stdout.toString();
      if (message) {
        console.log(message);
      }
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

    if (isIncludeStdout(e)) {
      console.log(e.stdout);
    }
    return false;
  }
}

async function typeCheck(): Promise<boolean> {
  spinnies.add('typeCheck', { text: 'Type checking it...' });
  try {
    const { stdout } = await exec('node ./node_modules/.bin/tsc --noEmit');
    if (stdout) {
      console.log(stdout);
      spinnies.fail('typeCheck', { text: "Couldn't type check 😔" });
      return false;
    }
    spinnies.succeed('typeCheck', { text: 'All type checked!' });
    return true;
  } catch (e) {
    spinnies.fail('typeCheck', { text: "Couldn't type check 😔" });

    if (isIncludeStdout(e)) console.log(e.stdout);

    return false;
  }
}

async function lintAndCompile() {
  const results: boolean[] = await Promise.all([lint(), typeCheck(), format()]);
  if (!results.every(Boolean)) {
    return process.exit(1);
  }
  process.exit(0);
}

lintAndCompile().catch(_e => {
  spinnies.fail('lint', { text: 'Lint error detected 🤡' });
  spinnies.fail('compile', { text: "Couldn't compile 😔" });
  process.exit(1);
});

function isIncludeStdout(e: any): e is { stdout: string } {
  return e.stdout !== undefined;
}
