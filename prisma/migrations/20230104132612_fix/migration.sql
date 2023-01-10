/*
  Warnings:

  - The `winner_team` column on the `games` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "games" DROP COLUMN "winner_team",
ADD COLUMN     "winner_team" "Team";
