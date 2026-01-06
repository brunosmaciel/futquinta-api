import { IBolaMurchaRepository } from '../../repositories/IBolaMurcharepository';
export class UpdateBolaMurchaUseCase {
  constructor(private BolaMurchaRepository: IBolaMurchaRepository) {}

  async execute(playerId: number, gameId: number) {
    return await this.BolaMurchaRepository.update(playerId, gameId);
  }
}
