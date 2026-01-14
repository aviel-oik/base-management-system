import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Shift } from '../shifts/shifts.model';

@Table({
  tableName: 'assignments',
  timestamps: true,
})
export class Assignment extends Model<Assignment> {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Shift)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare shiftId: number;

  @BelongsTo(() => Shift)
  shift: Shift;
}
