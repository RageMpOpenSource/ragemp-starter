'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is only example loader for all commands from 'modules/commands' directory.
 * For example you can expand this with Regexp and scan for files with 'command' word inside directories.
 * There is a lot of ways to do this.
 */
const glob = require('glob');
const logger_1 = __importDefault(require("../modules/utils/logger"));
module.exports = () => __awaiter(this, void 0, void 0, function* () {
    try {
        glob.sync(__dirname + '/../modules/commands/' + '/**/*.js').forEach((file) => {
            require(file);
        });
        logger_1.default('loaders', `Loaded all commands!`, 'info');
    }
    catch (err) {
        logger_1.default('loaders', `Error while loading commands (Error: ${err.message} / ${err.stack})!`, 'error');
    }
});
