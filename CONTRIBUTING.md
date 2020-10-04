### How to start a local development on your machine

Please ensure that you already have Node installed on your machine. e.g. :

```sh
❯ node --version
  v14.13.0
```

Install required package using npm:

```sh
❯ npm install
```

Run with dev server:
```
❯ npm run start
```

It will generate a `dist` folder in the project tree.

Use the `dist` folder to unpack local extension. e.g. using chrome:

go to `chrome://extensions/` on your chrome URL bar, then click `Load unpacked` then choose the generated `dist` folder.

Then you're ready to go!

Note: it's a hot reload local development.

### Development Style

- Use Linter as the main style navigation
- Use `styled component` for creating custom components
- Please keep the project structure tidy, if a component grows too big, split it into chunks.

### How to create a proper PR

- Create a descriptive title and description for clarity
- Mention the issue link that the PR wants to solve
- Attach a screenshot related to the PR if possible