import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private usersrepository: UsersRepository,
  ) {}

  async getAllUsers(): Promise<Users[]> {
    return this.usersrepository.getAllUsers();
  }

  async deleteUser(username: string, password: string): Promise<Users | null> {
    const user = await this.usersrepository.getByUserName(username);
    if (!user) return null;

    await this.usersrepository.deleteByUserName(username, password);
    return user;
  }

  async updateUser(
    id: number,
    updateData: Partial<Users>,
  ): Promise<Users | null> {
    return this.usersrepository.updateUser(id, updateData);
  }

  async createUsers(
    username: string,
    password: string,
    name: string,
  ): Promise<Users> {
    return this.usersrepository.createUser(username, password, name);
  }
}
