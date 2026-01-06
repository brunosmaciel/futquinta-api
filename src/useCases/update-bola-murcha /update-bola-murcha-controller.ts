import { Request, Response } from 'express';
import { UpdateBolaMurchaUseCase } from './update-bola-murcha-usecase';

export class UpdateBolaMurchaController {
  constructor(private UpdateBolaMurcha: UpdateBolaMurchaUseCase) {}

  async handle(req: Request, res: Response) {
    const { playerId, gameId } = req.params;
    try {
      const updateBolaMurcha = await this.UpdateBolaMurcha.execute(+playerId, +gameId);

      res.status(200).json({
        message: `MOTM with id ${updateBolaMurcha.id} deleted with sucess `,
        data: { ...updateBolaMurcha },
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
