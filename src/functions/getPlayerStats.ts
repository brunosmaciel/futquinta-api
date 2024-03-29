import { PlayerProfileWithStats } from './../../index.d';
export const getGamesRecord = (
  totalOfGames: number,
  vic: number,
  draw: number
): number => {
  const playerTotalPoints = vic * 3 + draw * 1;
  const disputedPoints = totalOfGames * 3;

  const record = (playerTotalPoints / disputedPoints) * 100;

  return +record;
};
export function getPlayerStats(player: PlayerProfileWithStats) {
  const { function: playerFunction, Stats } = player;
  const goals = Stats.map((stat) => stat.goals).reduce(
    (acc, current) => acc + current,
    0
  );

  const assists = Stats.map((stat) => stat.assists).reduce(
    (acc, current) => acc + current,
    0
  );

  const substitutions = Stats.map((stat) => stat.substituition).reduce(
    (acc, current) => acc + current,
    0
  );
  const victories = Stats.filter(
    (stat) => stat.currentTeam === stat.Game.winnerTeam
  ).length;

  const defeats = Stats.filter(
    (stat) => stat.currentTeam !== stat.Game.winnerTeam && stat.Game.winnerTeam !== 'DRAW'
  ).length;

  const draws = Stats.filter(
    (stat) => stat.currentTeam !== stat.Game.winnerTeam && stat.Game.winnerTeam === 'DRAW'
  ).length;

  const totalGames = Stats.filter((stat) => stat.Game).length;

  const points = victories * 3 + draws * 1;

  const goalsPerGame = goals / totalGames;

  const gamesRecord = getGamesRecord(totalGames, victories, draws);

  const mvp = player.MOTM.length;

  const goalKeeper = Stats.filter((stat) => stat.function === 'GOALKEEPER');
  const goalsConcededOnWhiteTeam = goalKeeper
    .filter((stat) => stat.currentTeam === 'WHITE') // filtrei todos os jogos do X no time Branco
    .map((stat) => stat.Game.greenGoals)
    .reduce((acc, current) => acc + current, 0); //Desses jogos retornei todos os gols do time adversario
  // .reduce((acc, current) => acc + current, 0);

  const goalsConcededOnGreenTeam = goalKeeper
    .filter((stat) => stat.currentTeam === 'GREEN') // filtrei todos os jogos do X no time Verde
    .map((stat) => stat.Game.whiteGoals)
    .reduce((acc, current) => acc + current, 0); // Desses jogos retornei todos os gols do time adversario

  const goalsConceded = goalsConcededOnGreenTeam + goalsConcededOnWhiteTeam;

  if (playerFunction === 'GOALKEEPER') {
    return {
      goals,
      goalsConceded,
      assists,
      substitutions,
      victories,
      defeats,
      draws,
      goalsPerGame,
      points,
      gamesRecord,
      mvp,
      totalGames,
    };
  }
  return {
    goals,
    goalsConceded: 0,
    assists,
    substitutions,
    victories,
    defeats,
    draws,
    goalsPerGame,
    points,
    gamesRecord,
    mvp,
    totalGames,
  };
}
