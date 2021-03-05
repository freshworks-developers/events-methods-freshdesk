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
  const spotlight = document.querySelector('.spotlight');

  let clickEvents = [
    'ticket.replyClick',
    'ticket.sendReply',
    'ticket.forwardClick',
    'ticket.conversationForward',
    'ticket.forward',
    'ticket.notesClick',
    'ticket.addNote',
    'ticket.closeTicketClick',
    'ticket.deleteTicketClick',
    'ticket.previousTicketClick',
    'ticket.nextTicketClick',
    'ticket.startTimer',
    'ticket.stopTimer',
    'ticket.updateTimer',
    'ticket.deleteTimer'
  ];
  clickEvents.forEach(function register(click) {
    client.events.on(click, function writeToDOM(event) {
      spotlight.insertAdjacentHTML('afterend', `<fw-label value="${click}" color="green"></fw-label>`);
    });
  });

  let interceptEvents = {
    prevent: ['ticket.closeTicketClick', 'ticket.deleteTicketClick'],
    allow: ['ticket.propertiesUpdated', 'ticket.sendReply']
  };

  interceptEvents['prevent'].forEach(function registerCb(click) {
    client.events.on(click, preventClickEvent, { intercept: true });

    function preventClickEvent(event) {
      let eventName = event.type;
      const row = `<fw-label value="${eventName.slice(7)} prevented" color="red"></fw-label>`;
      spotlight.insertAdjacentHTML('afterend', row);
    }
  });

  interceptEvents['allow'].forEach(function registerCb(click) {
    client.events.on(click, allowClickEvents);

    function allowClickEvents(event) {
      let eventName = event.type;
      const row = `<fw-label value="${eventName.slice(7)} allowed" color="red"></fw-label>`;
      spotlight.insertAdjacentHTML('afterend', row);
      event.helper.done();
    }
  });

  /** ~ end ~ */
}
