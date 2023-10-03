import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const user= new User();
    user.age=createUserDto.age
    user.firstname=createUserDto.firstname;
    user.lastname=createUserDto.lastname;
     await user.save();
    return user;
  }

  findAll() {
   
    return  User.find();
  }

  findOne(id: number) {
    return User.findOne({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
