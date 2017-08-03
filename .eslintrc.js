module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react", "jsx-a11y", "import"
  ],
  "rules": {
    "react/jsx-filename-extension": [ 1, { "extensions": [ ".js", ".jsx" ] } ],
    "import/no-extraneous-dependencies": [ 2, { devDependencies: true } ],
    "jsx-quotes": ["error", "prefer-single"]
  }
};
