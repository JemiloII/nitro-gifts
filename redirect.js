const app = require('connect')();
const redirectSSL = require('redirect-ssl');

app.use(redirectSSL);

module.exports = {
  app,
  running: false,
  start() {
    if (!this.running) {
      app.listen(80, () => {
        console.log('Redirect Running!');
        this.running = true;
      });
    }
  }
};
