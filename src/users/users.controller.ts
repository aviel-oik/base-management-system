
import { Controller, Post, Get, Param, Body, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { CommanderGuard } from '../auth/commander.guard';
import { ValidUserGuard } from '../auth/validUser.guard';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @UseGuards(ValidUserGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(ValidUserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(Number(id));
  }

  @UseGuards(CommanderGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}
