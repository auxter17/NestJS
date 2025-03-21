import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './users/configtable/typeorm.config';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
