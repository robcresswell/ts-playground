import { myFunction } from './my-other-module.ts';

async function main() {
  await myFunction();
}

main().catch((err) => {
  console.error(err);
});
