import { Module } from '@nestjs/common';
import { AssignmentsController } from './assignments.controller';
import { AssignmentsService } from './assignments.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Assignment } from './assignments.model';
import { User } from '../users/users.model';
import { Shift } from '../shifts/shifts.model';

@Module({
  imports: [SequelizeModule.forFeature([Assignment, User, Shift])],
  controllers: [AssignmentsController],
  providers: [AssignmentsService],
  exports: [SequelizeModule],
})
export class AssignmentsModule {}
