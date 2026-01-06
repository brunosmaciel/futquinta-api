import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ errorFormat: 'minimal' });

const GameModel = prisma.game;
const PlayersProfile = prisma.playerProfile;
const PlayersStats = prisma.playerStats;
const User = prisma.user;
const MOTMModel = prisma.mOTM;
const oldSeason = prisma.oldSeason;
const BolaMurchaClient = prisma.bolaMurcha;

export {
  GameModel,
  BolaMurchaClient,
  oldSeason,
  PlayersProfile,
  PlayersStats,
  prisma,
  User,
  MOTMModel,
};
