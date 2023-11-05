import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateUser(@Param('id') id: number, @Body() updatedUser: CreateUserDto) {
    this.userService.updateUser(id, updatedUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.userService.deleteUser(id);
  }

  @Get(':username')
  searchUser(@Param('username') username: string) {
    return this.userService.searchUser(username);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
