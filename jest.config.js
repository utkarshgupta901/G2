module.exports={
    "runner": "jest-electron/runner",
    "testEnvironment": "jest-electron/environment",
    "testTimeout": 30000,
    "preset": "ts-jest",
    "collectCoverage": false,
    "collectCoverageFrom": [
      "src/**/*.{ts,js}",
      "!**/node_modules/**",
      "!**/vendor/**"
    ],
    "testRegex": "/tests/.*-spec\\.ts?$",
    "moduleFileExtensions": [
      "ts",
      "js",
      "json"
    ]
}
