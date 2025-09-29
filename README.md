# TS Playground

> [!NOTE]
> Requires `curl`, `tar` and [fnm](https://github.com/Schniz/fnm) to be available

```sh
curl -sL https://github.com/robcresswell/ts-playground/archive/refs/heads/main.tar.gz | \
tar -xz && \
mv ts-playground-main ts-playground && \
cd ts-playground && \
fnm use && \
npm ci --silent
```

```sh
node .
```

Now go edit `src/main.ts` and write some fun stuff

## Writing something vaguely usable

When you want write some code, put stuff in `src/`. `main.ts` is the entry point
to the project; run `npm run dev` to get a live reload dev server that watches
`src/` and runs `main.ts` when you save.

There's a simple test framework set up, using [Vitest](https://vitest.dev/). Run
`npm test` to run the tests.

## Tips

- Some tools for terminal output:
  - [node:util.styleText](https://nodejs.org/api/util.html#utilstyletextformat-text-options)
  - [figures](http://npmjs.com/figures)
  - [yocto-spinner](http://npmjs.com/yocto-spinner)

## Why?

JS/TS has a pretty serious boilerplate problem. There are lots of ongoing
projects to improve this, but its a pain to keep everything up to date and
working together. I keep this repo up to date with my personal preferences so
that I can easily bootstrap new TS projects, either for scripting or something
more comprehensive.
