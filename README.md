# stinodes-ui

A simple ReactJS component library, built on a modern stack.

## Getting started with the source

The project is built up as a mono-repo, leveraging both Lerna and Yarn Workspaces.
The components are demoed using Storybook (which is its own package in the repo).

To get started with the code (and view the components locally):

1. Clone the repository

2. Install dependencies

```
$ yarn install -w
```

3. Bootstrap the packages

```
$ yarn bootstrap-all
```

4. Build the packages

```
$ yarn build
```

5. Run the storybook

```
$ yarn storybook
```

**Note: these commands should be run in the root folder of the project.**

## The stack

This library uses:

- React (duh)
- Emotion
- Styled System

## Extra development commands

### Creating a new package:

```
$ yarn create <package-name>
```

This will add a package with the provided name, and correctly set the values in the `package.json` and the `README.md`.
Currently `packages/box` is used as a template.
