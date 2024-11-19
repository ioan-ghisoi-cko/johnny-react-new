module.exports = {
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/tests"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
