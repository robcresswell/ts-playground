#!/usr/bin/env -S node --no-warnings=ExperimentalWarning

async function main() {
  console.log(`Hello World!`);
}

main().catch((err) => {
  console.error(err);
});
