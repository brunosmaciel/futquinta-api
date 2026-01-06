import { BolaMurcha } from '../../entities/BolaMurcha';
import { IBolaMurchaRepository } from '../../repositories/IBolaMurcharepository';
import { IMOTMRespository } from '../../repositories/IMOTMRepository';
export class CreateBolaMurchaUseCase {
  constructor(private BolaMurchaRepository: IBolaMurchaRepository) {}

  async execute({ points, gameid, playerId }: BolaMurcha) {
    const newBolaMurcha = new BolaMurcha({ points, gameid, playerId });

    return await this.BolaMurchaRepository.save(newBolaMurcha);
  }
}
