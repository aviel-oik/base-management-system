import { Controller, Post, Body, Get } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { UseGuards } from '@nestjs/common';
import { ValidUserGuard } from '../auth/validUser.guard';
import { CommanderGuard } from 'src/auth/commander.guard';


@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @UseGuards(CommanderGuard)
  @Post()
  assign(@Body() body) {
    return this.assignmentsService.assign(body);
  }

  @UseGuards(ValidUserGuard)
  @Get()
  findAll() {
    return this.assignmentsService.findAll();
  }
}
