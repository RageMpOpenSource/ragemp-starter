const chatEventsHandler = require('./chat/eventsHandler');
const { preparePlayerClientView } = require('./player/service');

mp.events.add('clientLaunched', () => preparePlayerClientView());
mp.events.call('clientLaunched');
