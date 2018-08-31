# Command by Command Setup

## Empty NPM/GIT Project

1. `npm init`, add name, description, author, license
2. `git init`
3. Add `.gitignore` and `LICENSE`
4. `npm install` to create empty `package-lock.json`
5. `yarn install` to create empty `yarn.lock`

## Webpack

6. `npm install --save-dev webpack`
7. Create `webpack.config.js`
8. `npm install --save-dev babili-webpack-plugin`

## Babel

http://babeljs.io/docs/setup/#installation

9. `npm install --save-dev babel-loader babel-core`
10. Create '.babelrc', configure webpack

## Flow

https://flow.org/en/docs/tools/babel/

11. `npm install --save-dev babel-cli babel-preset-flow`
12. Edit `.babelrc`
13. `npm install --save-dev flow-bin`
14. Add `.flowconfig`
15. `npm install --save-dev flow-interfaces-chrome`

## Icons

16. Add `./src/icons`, icons should be not less than 128x128.
17. Hack to get default gray icon: open `chrome://extension`, untick _"Enable"_
    near your extension, open page sources and extract image from there.

## Manifest

18. If you omit `homepage_url`, then webstore url will be used as home page.
    This url is used if right click on icon and select extension name.

## Bebel Transforms

19. `npm install --save-dev babel-plugin-transform-class-properties`
20. `npm install --save-dev babel-plugin-transform-object-rest-spread`
21. Edit `.babelrc`.

## React

https://facebook.github.io/react/docs/installation.html

22. `npm install --save-dev babel-preset-react babel-preset-react`
23. `npm install --save react react-dom`
24. `npm install --save history react-router react-router-dom`

## Other

25. Error reporting libs: `./src/src/lib`
26. `npm install --save symlink-to`

## ESLint

https://github.com/gajus/eslint-plugin-flowtype

27. `npm install eslint --save-dev`
28. Create `.eslintrc.js`
29. `npm install --save-dev babel-eslint eslint-plugin-flowtype`
30. https://www.npmjs.com/package/eslint-config-airbnb
31. `npm install eslint-loader --save-dev`

## Scripts

32. `npm install --save-dev forever`

## Building

33. `npm install --save-dev copy-webpack-plugin`
