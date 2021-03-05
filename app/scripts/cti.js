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
  client.events.on('cti.triggerDialer', function renderPhoneNumber(event) {
    const { number } = event.helper.getData();
    const label = document.querySelector('.spotlight');
    label.setAttribute('value', `Phone Number: ${number}`);
    label.setAttribute('color', `green`);
    console.log(number);
  });
  /** ~ end ~ */
}
