document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

function renderApp() {
  app
    .initialized()
    .then((_client) => {
      window['client'] = _client;
      client.events.on('app.activated', registerChangeEvents);
    })
    .catch(console.error);
}

/**
 * Listens to changes events and writes them to the app UI.
 */

function registerChangeEvents() {
  /** ~ play ground starts here ~ */
  /** ~ end ~ */
}
