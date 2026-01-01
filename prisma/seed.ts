import { PrismaClient } from '@prisma/client';
import { getPlayerStats } from '../src/functions/getPlayerStats';
import { PlayerProfileWithStats } from '../index';
import { getGeneralRanking } from './../src/functions/getGeneralRank';
import pLimit from 'p-limit';

const prisma = new PrismaClient();

async function main() {
  const limit = pLimit(2);
  return await prisma.$transaction(
    async (tx) => {
      // const allPlayers = await prisma.playerProfile.findMany({
      //   include: {
      //     Stats: {
      //       include: {
      //         player: true,
      //         Game: true,
      //       },
      //     },
      //     MOTM: true,
      //   },
      // });
      // const allPlayersConverted = allPlayers as unknown as PlayerProfileWithStats[];
      // const stats = allPlayersConverted.map((player) => {
      //   const stats = getPlayerStats(player);
      //   return { id: player.id, name: player.name, slug: player.slug, ...stats };
      // });
      // const position = getGeneralRanking(allPlayersConverted);
      // const teste = await Promise.all(
      //   stats.map((player) => {
      //     const rankPosition = position.find(
      //       (data) => data.slug === player.slug
      //     )?.position;
      //     limit(() =>
      //       prisma.oldSeason.create({
      //         data: {
      //           playerId: player.id,
      //           defeats: player.defeats,
      //           victories: player.victories,
      //           draws: player.draws,
      //           year: 2025,
      //           motmPoints: player.mvp,
      //           goals: player.goals,
      //           goalsConceded: player.goalsConceded,
      //           rankPosition: Number(rankPosition) || 0,
      //         },
      //       })
      //     );
      //   })
      // );
      await prisma.playerStats.deleteMany();
      await prisma.game.deleteMany();
    },
    {
      timeout: 120000,
      maxWait: 120000,
    }
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
