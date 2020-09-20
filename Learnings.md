Bundler
a bundler is a tool that recursively follows all imports from the entry point of your app and bundles them up into a single file. Bundlers can also minify your files by removing unnecessary white spaces, new lines, comments, and block delimiters without affecting their functionality.

Parcel vs Webpack

- Configuration of a bundler (parcel can go without ,and can use .html as the starter file and can also read the list of available configs and bundle accordingly, webpack can but needs the config file for more stuffs and is ideal for complex stuffs as we can configure accordingly)
- From the readings find that parcel is much faster in builds and super fast with rebuilds as it supports caching
- dead code elimination/ tree shaking( parcel supports these, webpack requires configuration setup - SideEffects flag in your package.json, using minifiers such as UglifyJSPlugin )
- code splitting ( webpack supports lazy loading 3 ways, )
- Live reload (inbuilt in parce, needs webpack-dev-server for webpack )
- Hot module replacement (only refreshes the files that were changed while still maintaining the state of the app)
- Module transformers (Transformers are essentially teachers who teach the bundler how to process files other than JS and add them to your app’s dependency graph and bundle. Parcel automatically runs the appropriate transformer when it finds a configuration file such as.babelrc, .postcssrc, .posthtml)

References: https://medium.com/better-programming/the-battle-of-bundlers-6333a4e3eda9

###LINTING
A linter is a small program that checks code for stylistic or programming errors.

- use prettier(code formatter) for auto-formatting, eslint for format enforcement and error checking
  use Prettier for formatting and linters for catching bugs!
  when using prettier, to use it as a precommit , refer https://prettier.io/docs/en/precommit.html
- using Eslint , set up eslint features `yarn run eslint --init`, creates the .eslintrc.js (depends on the specification you choose) for eslinting configs
- since eslint supports only standards Js features, in order to use for react components, need to set up for react
- defualt parser supported is esprima, you can add additions parsers - babel, typescript, etc etc in the config

references : https://eslint.org/docs/user-guide/configuring
