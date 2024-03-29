import { Prisma } from '@prisma/client';
import { User } from '../entities/User';
import { User as UserModel } from '../services/prismaClient';
import jwt from 'jsonwebtoken';
import { IGetTokenDTO } from '../useCases/get-token/get-token-DTO';
import { IUsersRepository } from './IUsersRepository';
import { isPasswordValid } from '../functions/is-password-valid';
import { JWTPayload } from '../entities/JWTPayload';

export type TokenResponse = {
  token: string;
  user: {
    id: number;
    email: string;
  };
};
export class PostgressUsersRepository implements IUsersRepository {
  async getMe(token: string): Promise<JWTPayload> {
    const me = (await jwt.verify(token, process.env.TOKEN_SECRET || '')) as JWTPayload;

    return me;
  }
  async save({ email, password }: User): Promise<User> {
    try {
      const newUser = await UserModel.create({
        data: {
          email,
          password,
        },
      });
      return newUser;
    } catch (err: any) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new Error('Email field must be unique');
        }
      }
      throw err;
    }
  }
  async update(id: number, data: User): Promise<User> {
    try {
      const updatedUser = await UserModel.update({
        where: {
          id,
        },
        data,
      });
      return updatedUser;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async delete(id: number): Promise<User> {
    try {
      const deletedUser = await UserModel.delete({
        where: { id },
      });
      return deletedUser;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
  async getToken({ email, password }: IGetTokenDTO): Promise<TokenResponse> {
    try {
      const user = await UserModel.findMany({
        where: {
          email,
        },
      });

      const { email: userEmail, password: userPassword, id } = user[0];

      if (!(await isPasswordValid(userPassword, password))) {
        throw new Error('Invalid email or password');
      }

      const token = jwt.sign({ id, email: userEmail }, process.env.TOKEN_SECRET || '', {
        expiresIn: process.env.TOKEN_EXPIRATION || '3d',
      });

      return {
        token,
        user: {
          id,
          email: userEmail,
        },
      };
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
