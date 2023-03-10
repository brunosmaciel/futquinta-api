import { Request, Response } from 'express';
import { FinishGameUseCase } from './finish-game-usecase';
export class FinishGameController {
  constructor(private FinishGame: FinishGameUseCase) {}
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { winnerTeam } = req.body;
    try {
      const gameFinished = await this.FinishGame.execute(+id, winnerTeam);
      res.status(200).json(gameFinished);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
