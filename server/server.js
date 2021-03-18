'use strict';

const thirdPartyEndpoint = 'https://fcc15baf9a2e24ef7421ffe101394ca7.m.pipedream.net';

/* ~ start ~*/
exports = {
  events: [
    { event: 'onAppInstall', callback: 'onInstallHandler' },
    { event: 'onAppUninstall', callback: 'onUninstallHandler' }
  ],
  onInstallHandler: function (payload) {
    console.info(' Observed on App Install ', payload);
    renderData();
  },
  onUninstallHandler: function (payload) {
    console.info('Observed on App Uninstall', payload);
    renderData();
  }
};

/** ~end~ */
