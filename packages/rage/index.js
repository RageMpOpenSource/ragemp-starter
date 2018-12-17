"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Lodash
var _ = require('lodash');
// Env
const dotenv = require('dotenv');
const result = dotenv.config(); // eslint-disable-line no-unused-vars
(() => __awaiter(this, void 0, void 0, function* () {
    yield require('./loaders/databaseLoader')();
    yield require('./loaders/commandsLoader.js')();
    yield require('./loaders/bootstrapLoader.js')();
}))();
// This not belongs here. You should create events handler or something.
// I just included this here to not freak you out when you gonna connect to the server and try type something on chat.
mp.events.add('playerChat', (player, message) => mp.players.broadcast(`${player.name}: ${message}`));
