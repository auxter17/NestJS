import { IsNotEmpty } from 'class-validator';

export class userdto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;

  @IsNotEmpty({ message: 'Username should not be empty' })
  username: string;
}
