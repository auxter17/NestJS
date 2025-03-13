import {
  Controller,
  Body,
  Put,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { userdto } from './dto/createuser.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getAll() {
    return this.userService.getAllUsers();
  }

  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() userDto: userdto) {
    return await this.userService.createUsers(
      userDto.username,
      userDto.password,
      userDto.name,
    );
  }

  @Put()
  async updateUser(
    @Body() updateData: { id: number; username?: string; password?: string },
  ) {
    return this.userService.updateUser(updateData.id, updateData);
  }

  @Delete()
  async deleteUser(@Body() body: { username: string }) {
    return this.userService.deleteUser(body.username);
  }
}
