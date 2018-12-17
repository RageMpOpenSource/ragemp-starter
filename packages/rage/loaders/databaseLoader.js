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
const logger_1 = __importDefault(require("../modules/utils/logger"));
module.exports = () => __awaiter(this, void 0, void 0, function* () {
    try {
        require('../modules/database/database');
        logger_1.default('loaders', `Loaded successfully database config with models!`, 'info');
    }
    catch (err) {
        logger_1.default('loader', `Error while loading database config (Error: ${err.message} / ${err.stack})!`, 'error');
    }
});
