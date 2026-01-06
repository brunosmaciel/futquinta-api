import { IBolaMurchaRepository } from '../IBolaMurcharepository';
import { BolaMurchaClient, PlayersProfile } from '../../services/prismaClient';
import { PlayerProfile } from '../../entities/PlayerProfile';
import { BolaMurcha } from '../../entities/BolaMurcha';

export class PrismaBolaMurchaRepository implements IBolaMurchaRepository {
  async list(filter?: unknown): Promise<PlayerProfile> {
    try {
      const bolaMurchaRank = await PlayersProfile.findMany({
        include: {
          _count: {
            select: {
              BolaMurcha: true,
            },
          },
        },
      });
      return { bolaMurchaRank } as unknown as PlayerProfile;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  listById(id: number): Promise<BolaMurcha> {
    throw new Error('Method not implemented.');
  }
  async update(playerId: number, gameId: number): Promise<BolaMurcha> {
    try {
      const updateBolaMurcha = await BolaMurchaClient.update({
        where: {
          id: gameId,
        },
        data: {
          playerId,
        },
      });
      return updateBolaMurcha;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  async delete(id: number): Promise<BolaMurcha> {
    try {
      const deletedMOTM = await BolaMurchaClient.delete({
        where: {
          id,
        },
      });
      return deletedMOTM;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async save({ gameid, id, playerId, points }: BolaMurcha): Promise<BolaMurcha> {
    try {
      const newBolaMurcha = await BolaMurchaClient.create({
        data: {
          points,
          gameid,
          playerId,
          id,
        },
      });
      return newBolaMurcha;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
