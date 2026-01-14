import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';



@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

  return this.userModel.create({
    ...dto,
    password: hashedPassword,
  } as any );
  }

  findAll() {
    return this.userModel.findAll({
      attributes: { exclude: ['password'] },
    });
  }

  findById(id: number) {
    return this.userModel.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ where: { email } });
  }

  delete(id: number) {
    return this.userModel.destroy({ where: { id } });
  }

  // update(id: number, dto: Partial<CreateUserDto>) {
  //   return this.userModel.update(dto, { where: { id } });
  // }
}