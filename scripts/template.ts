#!/usr/bin/env -S node

async function main() {
  console.log(`Hello World!`);
}

try {
  await main();
} catch (err) {
  console.error(err);
}
