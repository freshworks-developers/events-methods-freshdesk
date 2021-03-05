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

  /** ~ end ~ */
}
