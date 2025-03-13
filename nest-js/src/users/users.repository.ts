import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersRepository extends Repository<Users> {
  constructor(private dataSource: DataSource) {
    super(Users, dataSource.createEntityManager());
  }

  async getAllUsers(): Promise<Users[]> {
    return this.find();
  }

  async deleteByUserName(
    username: string,
    password: string,
  ): Promise<DeleteResult> {
    return this.delete({ username, password });
  }

  async getByUserName(username: string): Promise<Users | null> {
    return this.findOne({ where: { username } });
  }

  async updateUser(
    id: number,
    updateData: Partial<Users>,
  ): Promise<Users | null> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new Error('User ID does not exist');
    }

    await this.update(id, updateData);
    return this.findOne({ where: { id } });
  }

  async createUser(
    username: string,
    password: string,
    name: string,
  ): Promise<Users> {
    const user = this.create({ username, password, name });
    return this.save(user);
  }
}
