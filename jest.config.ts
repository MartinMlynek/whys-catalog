export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  rootDir: "src",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/file-mock.js",
  },
};
