# Command by Command Setup

## Empty NPM/GIT Project

1. `npm init`, add name, description, author, license.
2. `git init`
3. Add `.gitignore` and `LICENSE`.
4. `npm install` to create empty `package-lock.json`.
5. `yarn install` to create empty `yarn.lock`.

## Webpack

6. `npm install --save-dev webpack`.
7. Create `webpack.config.js`.
8. `npm install --save-dev babili-webpack-plugin`

## Babel

http://babeljs.io/docs/setup/#installation

9. `npm install --save-dev babel-loader babel-core`.
10. Create '.babelrc', configure webpack.

## Flow

https://flow.org/en/docs/tools/babel/

11. `npm install --save-dev babel-cli babel-preset-flow`.
12. Edit `.babelrc`.
13. `npm install --save-dev flow-bin`.
14. Add `.flowconfig`.
15. `npm install --save-dev flow-interfaces-chrome`.
