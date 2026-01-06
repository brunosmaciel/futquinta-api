export class BolaMurcha {
  id?: number;
  points: number;
  playerId: number;
  gameid: number;

  constructor({ points, playerId, gameid }: BolaMurcha) {
    this.points = points;
    this.playerId = playerId;
    this.gameid = gameid;
  }
}
