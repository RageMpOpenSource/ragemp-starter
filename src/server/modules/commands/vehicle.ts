'use strict';

import { create } from '../../models/repositories/vehicle';

/**
 * This is only EXAMPLE of creating vehicle with use of manager.
 * Don't use this on production (live) server!
 * There is no validation, you need to take care of this.
 */
mp.events.addCommand('vehicle', (player: PlayerMp, fullText: string, model: string = 'f620') => create(player, model));
