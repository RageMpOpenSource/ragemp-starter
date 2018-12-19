const chatEventsHandler = require('./chat/chatEventsHandler');
const { preparePlayerClientView } = require('./player/playerService');

mp.events.add('clientLaunched', () => preparePlayerClientView());
mp.events.call('clientLaunched');
