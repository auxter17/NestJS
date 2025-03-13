import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

@Module({
  providers: [UsersService, UsersRepository],
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [UsersController],
})
export class UsersModule {}
