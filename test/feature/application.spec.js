/// <reference path="../spectron.d.ts" />
import createApp from '../createApp';

/** @type {spectron.Application} */
let app;

describe('#Launch', function () {
  beforeEach(() => {
    app = createApp();
    return app.start();
  }, 10e3);

  afterEach(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('shows an initial window.', async () => {
    const count = await app.client.getWindowCount();
    expect(count).toEqual(1);
  });
});
