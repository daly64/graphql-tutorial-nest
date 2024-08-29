import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { users } from './fakeDaraBase';

@Injectable()
export class UserService {
  create(createUserInput: CreateUserInput ) {
    const newUser = {
      id: users.length + 1,
      displayName: createUserInput.displayName ? createUserInput.displayName : '',
      ...createUserInput
    };
    return users.push(newUser);

  }

  findAll() {
    return users;
  }

  findOne(id: number ) {
    return users.find((user) => user.id === id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return users.map((user) => {
      if (user.id === id) {
        return {...user, ...updateUserInput};
      }
      return user;
    });
  }

  remove(id: number) {
    return users.filter((user) => user.id !== id);
  }
}
