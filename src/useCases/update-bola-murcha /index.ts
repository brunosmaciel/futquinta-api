import { PrismaBolaMurchaRepository } from '../../repositories/prisma/PrismaBolaMurchaRepository';
import { PrismaMOTMRepository } from '../../repositories/prisma/PrismaMOTMRepository';
import { UpdateBolaMurchaController } from './update-bola-murcha-controller';
import { UpdateBolaMurchaUseCase } from './update-bola-murcha-usecase';

const PrismBolaMurchaRepository = new PrismaBolaMurchaRepository();

const updateBolaMurchaUseCase = new UpdateBolaMurchaUseCase(PrismBolaMurchaRepository);

const updateBolaMurchaController = new UpdateBolaMurchaController(
  updateBolaMurchaUseCase
);

export { updateBolaMurchaController, updateBolaMurchaUseCase };
