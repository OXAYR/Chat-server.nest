import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { EndUser } from './entities/user.entity';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/login-user.dto.s';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(EndUser.name) private EndUserModel: Model<EndUser>,
  ) {}
  create(createUserDto: CreateUserDto): Promise<EndUser> {
    const createdEndUser = new this.EndUserModel(createUserDto);
    return createdEndUser.save();
  }
  async validateUser(loginUserDto: LoginUserDto): Promise<Enduser> {
    const user = await this.EndUserModel.findOne({
      where: { email: loginUserDto.email, password: loginUserDto.password },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  findAll(): Promise<EndUser[]> {
    return this.EndUserModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
