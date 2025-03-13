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
    @Body()
    updateData: {
      id: number;
      username?: string;
      password?: string;
      name?: string;
    },
  ) {
    try {
      const updatedUser = await this.userService.updateUser(
        updateData.id,
        updateData,
      );

      if (!updatedUser) {
        return { success: false, message: 'User ID does not exist.' };
      }

      return {
        success: true,
        message: 'User updated successfully!',
        user: updatedUser,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'An error occurred while updating the user.',
      };
    }
  }

  @Delete()
  async deleteUser(@Body() body: { username: string; password: string }) {
    return this.userService.deleteUser(body.username, body.password);
  }
}
