import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Assignment } from './assignments.model'

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectModel(Assignment)
    private readonly assignmentModel: typeof Assignment,
  ) {}

  assign(data: any) {
    return this.assignmentModel.create(data);
  }

  findAll() {
    return this.assignmentModel.findAll();
  }
}
