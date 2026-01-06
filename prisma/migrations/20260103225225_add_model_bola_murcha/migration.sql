-- CreateTable
CREATE TABLE "BolaMurcha" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "gameid" INTEGER NOT NULL,

    CONSTRAINT "BolaMurcha_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BolaMurcha" ADD CONSTRAINT "BolaMurcha_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BolaMurcha" ADD CONSTRAINT "BolaMurcha_gameid_fkey" FOREIGN KEY ("gameid") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE;
