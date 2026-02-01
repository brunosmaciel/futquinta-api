import { PrismaClient } from '@prisma/client';

import pLimit from 'p-limit';

const prisma = new PrismaClient();

async function main() {
  const limit = pLimit(3);
  return await prisma.$transaction(
    async (tx) => {
      const players = await prisma.playerProfile.findMany({
        select: {
          id: true,
          oldSeason: true,
        },
      });

      await Promise.all(
        players.map((player) =>
          limit(async () => {
            if (!player.oldSeason?.length) return;

            const totals = player.oldSeason.reduce(
              (acc, season) => {
                acc.goals += season.goals;
                acc.goalsConceded += season.goalsConceded ?? 0;
                acc.victories += season.victories;
                acc.defeats += season.defeats;
                acc.draws += season.draws;
                return acc;
              },
              {
                goals: 0,
                goalsConceded: 0,
                victories: 0,
                defeats: 0,
                draws: 0,
              }
            );

            return prisma.playerProfile.update({
              where: { id: player.id },
              data: totals,
            });
          })
        )
      );

      return;
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
