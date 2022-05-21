module.exports = {
  "preset": "jest-expo",
  "transform": {
      "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.tsx?$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "tsconfig": {
        "jsx": "react-jsx",
      }
    }
  },
  "testRegex": "(/__tests__/.*|/src/.*\\.(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "ios.ts",
    "ios.tsx",
    "android.ts",
    "android.tsx"
  ]
}
