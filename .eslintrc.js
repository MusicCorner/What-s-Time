/*
  0 - off,
  1 - warning,
  2 - error
*/

module.exports = {
  "plugins": ["react"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb-base",
    // "eslint:recommended",
    "plugin:react/recommended",
  ],
  "rules": {
    "indent": [2, "tab", { "SwitchCase": 1 }],
    "no-tabs": [0],
    "arrow-body-style": [0],
    "class-methods-use-this": [0],
    "arrow-parens": [0],
    "no-confusing-arrow": [0],
    "implicit-arrow-linebreak": [0],
    "react/jsx-uses-vars": [2],
    "import/prefer-default-export": [0],
    "object-curly-newline": [2, {
      "ImportDeclaration": "never",
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    "react/prop-types": [2],
  },
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        {"property": "freeze", "object": "Object"},
        {"property": "myFavoriteWrapper"}
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {"name": "Link", "linkAttribute": "to"}
    ]
  }
};
