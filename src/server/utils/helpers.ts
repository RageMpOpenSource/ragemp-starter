'use strict';

/**
 * Returns a random number between min and max (both included)
 * @param {number} min Minimum number
 * @param {number} max Maximum number
 * @return {number} Random number
 */
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Returns the player(s) that match the id or name provided
 * @param {string} idOrName Id or name of the player(s)
 * @return {PlayerMp | PlayerMp[] | undefined} Return a single a PlayerMp if only one is found,
 * an array of PlayerMp if multiple is found or undefined if none is found
 */
const findPlayer = (idOrName: any) => {
  if (!isNaN(idOrName))
    return mp.players.at(idOrName);

  var found: number = 0;
  var players: Array<PlayerMp> = [];
  idOrName = idOrName.replace('_', ' ')

  mp.players.forEach((player: PlayerMp) => {
    const name = player.name.toLocaleLowerCase();
    if (name.indexOf(idOrName.toLowerCase()) >= 0) {
      players.push(player);
      found++;
    }
  });

  if (found == 0) return undefined;
  else if (found > 1) return players;
  else return players[0];
}

export { randomInt, findPlayer };
