/*
  Warnings:

  - You are about to drop the column `function` on the `players` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "players" DROP COLUMN "function",
ADD COLUMN     "playerPosition" "PlayerFunction" NOT NULL DEFAULT 'OUTFIELDPLAYER';
