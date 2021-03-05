document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();
};

function renderApp() {
  app
    .initialized()
    .then((_client) => {
      window['client'] = _client;
      client.events.on('app.activated', phoneClickListener);
    })
    .catch(console.error);
}

/**
 * Registers a callback when user clicks on phone number in Freshdesk.
 * The callback appends phone number as a label to the app's user interface.
 */

function phoneClickListener() {
  /** ~ play ground starts here ~ */

  
  /** ~ end ~ */
}
