import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  private users = [];

  createUser(user: CreateUserDto) {
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: CreateUserDto) {
    if (this.users[id]) {
      this.users[id] = updatedUser;
    } else {
      throw new NotFoundException('User not found');
    }
  }

  deleteUser(id: number) {
    if (this.users[id]) {
      this.users.splice(id, 1);
    } else {
      throw new NotFoundException('User not found');
    }
  }

  searchUser(username: string) {
    const user = this.users.find((u) => u.username === username);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  getAllUsers() {
    return this.users;
  }
}
