const Plant = require('@plant/plant');
const { createServer } = require('@plant/http');

async function health () {
  const plant = new Plant();

  plant.use('/health', async ({ res }) => {
    res.body = 'OK';
  });

  // Build request handler
  createServer(plant)
    .listen(80);
}

module.exports = health;
