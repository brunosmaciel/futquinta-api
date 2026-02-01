-- CreateEnum
CREATE TYPE "SuspensionStatus" AS ENUM ('CLEAN', 'TWO_CARDS', 'SUSPENDED');

-- AlterTable
ALTER TABLE "players" ADD COLUMN     "suspensionStatus" "SuspensionStatus" NOT NULL DEFAULT 'CLEAN';
