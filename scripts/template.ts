#!/usr/bin/env -S bun

import { $ } from 'bun';

async function main() {
  await $`echo "Hello, World!"`;
}

try {
  await main();
} catch (err) {
  console.error(err);
}
