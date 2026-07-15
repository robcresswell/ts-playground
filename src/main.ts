import { myFunction } from './my-other-module.ts';

async function main(): Promise<void> {
  await myFunction();
}

try {
  await main();
} catch (err) {
  console.error(err);
}
