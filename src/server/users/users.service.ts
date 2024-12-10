import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findOne(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async create(input: CreateUserInput): Promise<User> {
    const user: User = {
      id: Date.now().toString(),
      ...input,
      createdAt: new Date().toISOString(),
    };
    this.users.push(user);
    return user;
  }
}