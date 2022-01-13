const Plant = require('@plant/plant');
const { createServer } = require('@plant/http');
const fs = require('fs');
// for server node apps
const NodeEnvironment = require('jest-environment-node');

// for browser js apps
// const NodeEnvironment = require('jest-environment-jsdom');

let server;

class TestEnvironment extends NodeEnvironment {
  async setup () {
    await super.setup();

    const plant = new Plant();

    plant.use('/news/freebies', async function ({ res }) {
      try {
        const data = fs.readFileSync('./tests/acceptance/pages/_live.html', 'utf8');
        res.html(data);
      } catch (err) {
        console.error(err);
        res.body = err;
      }
    });

    // Build request handler
    server = createServer(plant)
      .listen(8090);
  }

  async teardown () {
    server.close();
    await super.teardown();
  }
}

module.exports = TestEnvironment;
