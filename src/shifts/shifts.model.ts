import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'shifts',
  timestamps: true,
})
export class Shift extends Model<Shift> {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number; 

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare startTime: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare endTime: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare location: string;
}