# Tech Ecosystem

The [GETTING_STARTED.md](./GETTING_STARTED.md) gives you adequate information on
how to install dependencies and launch the app. Once you've done that, this
document is intended to give you a taste of how an app works, and more
important, why we choose the technology. It still assumes basic knowledge of
React and [React Native](https://reactnative.dev/). **If you're
completely new to React, please refer to https://github.com/petehunt/react-howto
instead!**

## Tech stack

### Core

- [x] [React](https://reactjs.org/)
- [x] [React Native](https://reactnative.dev/)
- [x] [SWR](https://swr.vercel.app/)
- [x] [React Hook Form](https://github.com/react-hook-form/react-hook-form)
- [x] [Dwarves React Toolkit](https://github.com/dwarvesf/react-toolkit)

### Static type checking & linting

- [x] [TypeScript](https://www.typescriptlang.org)
- [x] [ESLint](http://eslint.org/)
- [x] [Prettier](https://prettier.io/)

### Testing

- [x] [Jest](http://facebook.github.io/jest/)
- [x] [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- [x] [Cypress](https://github.com/cypress-io/cypress)

## Basic Building Blocks

### React Native

Production grade Mobile applications that scale, we list
[React Native](https://reactnative.dev/) to be the first candidate when we decide to setup
a React Native Mobile app. The opinionated framework gives you the best developer experience
with all the features you need for production: hybrid static & server rendering,
TypeScript support, smart bundling, route pre-fetching.

### TypeScript

We are adopting TypeScript to our code base. Forcing to write strongly-typed
syntax while you are familiar with dynamic/multi-paradigm scripting language
like JavaScript is sometimes annoying, even for experienced developers. However,
the drawback can be outweighted by following benefits when coming to write a
medium to large sized applications:

- [x] Catching your bugs at compile-time as you type them.
- [x] Coding confidently with autocompletion, definition jumping and source
      documentation.
- [x] Syncing API Interfaces between backend and frontend via Swagger json doc.
- [x] Relieve the pain of refactoring/renaming .

### SWR

We use [SWR](https://swr.vercel.app/) to be the main way of retrieving data in
React apps. The strategy is to first return the data from cache (stale), then
send the fetch request (revalidate), and finally come with the up-to-date data.
With SWR, components will get a stream of data updates constantly and
automatically. And the UI will be always fast and reactive. It features:

- [x] Transport and protocol agnostic data fetching
- [x] Fast page navigation
- [x] Revalidation on focus
- [x] Interval polling
- [x] Request deduplication
- [x] Local mutation

### React Hook Forms

If you are going to use a package for your forms, we recommend
[react-hook-forms](https://github.com/react-hook-form/react-hook-form). It is a
great balance of good performance and good developer experience.

## Architecture

Most of frontend applications consist of four layers: Service connector, State
management, Logic and UI. We opinionate about the technology for each layer with
a guarantee of production readiness.

<View style={Style.s({cen: true})}>
    <FastImage src="./img/architecture.png" style={Style.s({size: 100})} />
</View>

## Linting

This repo includes a complete static code analysis setup. It's composed of
[ESLint](http://eslint.org/) and [Prettier](https://prettier.io/).

We recommend that you install the relevant IDE extensions for each one of these
tools. Once you do, every time you'll press save, all your code will be
formatted and reviewed for quality automatically. (Read more at
[EDITOR.md](./EDITOR.md).)

We've also set up a git hook to automatically analyze and fix linting errors
before your code is committed. If you'd like to disable it or modify its
behavior, take a look at the `lint-staged` section in `package.json`.

## Read on:

- [Home](../README.md)
- [Getting started](./GETTING_STARTED.md)
- [Code style](./CODE_STYLE.md)
- [Editor](./EDITOR.md)
- [Writting test](./WRITING_TEST.md)
- [Deployment](./DEPLOYMENT.md)
