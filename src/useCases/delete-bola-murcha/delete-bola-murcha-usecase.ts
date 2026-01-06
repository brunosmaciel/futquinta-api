import { IBolaMurchaRepository } from '../../repositories/IBolaMurcharepository';
import { IMOTMRespository } from '../../repositories/IMOTMRepository';
export class DeleteBolaMurchaUseCase {
  constructor(private BolaMurchaRepository: IBolaMurchaRepository) {}

  async execute(id: number) {
    return await this.BolaMurchaRepository.delete(id);
  }
}
