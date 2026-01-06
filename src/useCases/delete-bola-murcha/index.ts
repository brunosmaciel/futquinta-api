import { PrismaBolaMurchaRepository } from '../../repositories/prisma/PrismaBolaMurchaRepository';
import { PrismaMOTMRepository } from '../../repositories/prisma/PrismaMOTMRepository';
import { DeleteBolaMurchaController } from './delete-bola-murcha-controller';
import { DeleteBolaMurchaUseCase } from './delete-bola-murcha-usecase';

const PrismBolaMurchaRepository = new PrismaBolaMurchaRepository();

const deleteBolaMurchaUseCase = new DeleteBolaMurchaUseCase(PrismBolaMurchaRepository);

const deleteBolaMurchaController = new DeleteBolaMurchaController(
  deleteBolaMurchaUseCase
);

export { deleteBolaMurchaController, deleteBolaMurchaUseCase };
