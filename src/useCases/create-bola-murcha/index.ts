import { PrismaBolaMurchaRepository } from '../../repositories/prisma/PrismaBolaMurchaRepository';
import { PrismaMOTMRepository } from '../../repositories/prisma/PrismaMOTMRepository';
import { CreateBolaMurchaController } from './create-bola-murcha-controller';
import { CreateBolaMurchaUseCase } from './create-bola-murcha-usecase';

const prismaBolaMurchaRepository = new PrismaBolaMurchaRepository();

const createBolaMurchaUseCase = new CreateBolaMurchaUseCase(prismaBolaMurchaRepository);

const createBolaMurchaController = new CreateBolaMurchaController(
  createBolaMurchaUseCase
);

export { createBolaMurchaController, createBolaMurchaUseCase };
