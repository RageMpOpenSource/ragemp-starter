import { preparePlayerClientView } from 'modules/player/service';

require('./modules/player/chat');

mp.events.add('clientLaunched', () => preparePlayerClientView());
mp.events.call('clientLaunched');
