module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true,
    },
    // "extends": "eslint:recommended",
    "globals": {
        "API_URL": true,
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jest",
    ],
    "rules": {
        "no-console": ["error", { allow: ["warn", "error"] }],
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": ["off", { "allow": "literal" }],
        // Allow object propTypes
        "react/forbid-prop-types": ["error", { "forbid": ["any", "array"] }],
        "jsx-a11y/no-noninteractive-element-interactions": [
          "off",
          {
            handlers: [
              "onClick",
              "onMouseDown",
              "onMouseUp",
              "onKeyPress",
              "onKeyDown",
              "onKeyUp",
            ],
          },
        ],
        "jsx-a11y/click-events-have-key-events": 0,
    }
};