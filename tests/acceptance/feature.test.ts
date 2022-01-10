/**
 * @jest-environment ./tests/acceptance/testEnvironment
 */

const fs = require('fs');

describe('feature', () => {
  it('should work', async () => {
    jest.setTimeout(30000);
    fs.copyFileSync('./tests/acceptance/pages/b.html', './tests/acceptance/pages/live.html');
    await delay(100000);
    expect(true).toBe(true);
  });
});

function delay (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
