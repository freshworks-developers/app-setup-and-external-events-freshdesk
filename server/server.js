'use strict';

exports = {
  events: [
    { event: 'onAppInstall', callback: 'onInstallHandler' },
    { event: 'onAppUninstall', callback: 'onUninstallHandler' },
    { event: 'onExternalEvent', callback: 'onExternalEventHandler' }
  ],

  onInstallHandler: function () {},
  onUninstallHandler: function () {},
  onExternalEventHandler: function () {}
};
