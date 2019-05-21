module.exports = {
  name: 'myapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/myapp/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1'
  }
};
