import { PrismaClient } from '@prisma/client';

import pLimit from 'p-limit';

const prisma = new PrismaClient();

async function main() {
  return await prisma.$transaction(
    async (tx) => {
      await prisma.playerProfile.createMany({
        data: [
          {
            name: 'Bruno-S',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 8,
            playerPosition: 'OUTFIELDPLAYER',
            slug: 'bruno-s',
            role: 'PERMANENT',
          },
          {
            name: 'Carlos',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 10,
            playerPosition: 'OUTFIELDPLAYER',
            slug: 'carlos',
            role: 'PERMANENT',
          },
          {
            name: 'Diego',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 7,
            playerPosition: 'OUTFIELDPLAYER',
            slug: 'diego',
            role: 'PERMANENT',
          },
          {
            name: 'Felipe',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 11,
            playerPosition: 'OUTFIELDPLAYER',
            slug: 'felipe',
            role: 'PERMANENT',
          },
          {
            name: 'Lucas',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 6,
            playerPosition: 'OUTFIELDPLAYER',
            slug: 'lucas',
            role: 'PERMANENT',
          },
          {
            name: 'Matheus',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 5,
            playerPosition: 'OUTFIELDPLAYER',
            slug: 'matheus',
            role: 'PERMANENT',
          },
          {
            name: 'Rafael',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 9,
            playerPosition: 'OUTFIELDPLAYER',
            slug: 'rafael',
            role: 'PERMANENT',
          },
          {
            name: 'Thiago',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 4,
            playerPosition: 'OUTFIELDPLAYER',
            slug: 'thiago',
            role: 'PERMANENT',
          },
          {
            name: 'Victor',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 1,
            playerPosition: 'GOALKEEPER',
            slug: 'victor',
            role: 'PERMANENT',
          },
          {
            name: 'André',
            goals: 0,
            assists: 0,
            victories: 0,
            defeats: 0,
            draws: 0,
            shirtNumber: 12,
            playerPosition: 'GOALKEEPER',
            slug: 'andre',
            role: 'PERMANENT',
          },
        ],
        skipDuplicates: true,
      });
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
