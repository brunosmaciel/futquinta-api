import { Request, Response } from 'express';
import { CreateBolaMurchaUseCase } from './create-bola-murcha-usecase';

export class CreateBolaMurchaController {
  constructor(private CreateBolaMurcha: CreateBolaMurchaUseCase) {}

  async handle(req: Request, res: Response) {
    const points = 1;
    const { playerId, gameId } = req.params;
    try {
      const newMOTM = await this.CreateBolaMurcha.execute({
        points,
        playerId: +playerId,
        gameid: +gameId,
      });

      res.status(201).json(newMOTM);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
