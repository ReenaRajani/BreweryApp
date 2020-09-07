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
