mp.events.add('playerChat', (player: PlayerMp, message: string) => {
  mp.players.broadcast(`${player.name}: ${message}`);
});
