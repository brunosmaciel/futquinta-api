/*
  Warnings:

  - Added the required column `points` to the `BolaMurcha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BolaMurcha" ADD COLUMN     "points" INTEGER NOT NULL;
