-- AlterTable
ALTER TABLE "players" ADD COLUMN     "totalRedCards" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalYellowCards" INTEGER NOT NULL DEFAULT 0;
