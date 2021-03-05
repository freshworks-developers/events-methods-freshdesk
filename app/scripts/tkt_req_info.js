document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

function renderApp() {
  app
    .initialized()
    .then((_client) => {
      window['client'] = _client;
      client.events.on('app.activated', eventsInTktDetailsPage);
    })
    .catch(console.error);
}

/**
 * Observes ticket click events and intercept events
 */

function eventsInTktDetailsPage() {
  /** ~ play ground starts here ~ */
  /** ~ end ~ */
}
