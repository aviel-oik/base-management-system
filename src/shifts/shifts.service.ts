import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shift } from './shifts.model'
import { dot } from 'node:test/reporters';
import { CreateShiftsDto } from './dto/createShifts.dto';

@Injectable()
export class ShiftsService {
  constructor(
    @InjectModel(Shift)
    private readonly shiftModel: typeof Shift,
  ) {}

  create(dto: CreateShiftsDto) {
    return this.shiftModel.create(dto as any);
  }

  findAll() {
    return this.shiftModel.findAll();
  }
}
