import { resolve } from 'path';
import electron from 'electron';
import { Application } from 'spectron';

export { Application };

/**
 * Create spectron test application.
 *
 * @export
 * @returns {Application}
 */
export default function createApp() {
  return new Application({
    path: electron,
    args: [resolve(__dirname, '../')],
    startTimeout: 10e3,
    waitTimeout: 10e3,
  });
}
