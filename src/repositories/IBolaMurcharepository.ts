import { BolaMurcha } from '../entities/BolaMurcha';
import { PlayerProfile } from '../entities/PlayerProfile';

export interface IBolaMurchaRepository {
  save(bolaMurchaData: BolaMurcha): Promise<BolaMurcha>;
  list(filter?: unknown): Promise<PlayerProfile>;
  listById(id: number): Promise<BolaMurcha>;
  update(playerId: number, gameId: number): Promise<BolaMurcha>;
  delete(id: number): Promise<BolaMurcha>;
}
