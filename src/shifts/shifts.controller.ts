import { Controller, Post, Get, Body } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { CommanderGuard } from 'src/auth/commander.guard';
import { ValidUserGuard } from '../auth/validUser.guard';
import { UseGuards } from '@nestjs/common';
import { CreateShiftsDto } from './dto/createShifts.dto';

@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}

  @UseGuards(CommanderGuard)
  @Post()
  create(@Body() dto: CreateShiftsDto) {
    return this.shiftsService.create(dto);
  }

  @UseGuards(ValidUserGuard)
  @Get()
  findAll() {
    return this.shiftsService.findAll();
  }
}
