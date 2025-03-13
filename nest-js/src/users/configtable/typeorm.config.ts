import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'nget30CJAA',
  database: 'mydb',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
