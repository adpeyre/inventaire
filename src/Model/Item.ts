import {
  Model, Table, Column, CreatedAt, UpdatedAt, ForeignKey,
} from 'sequelize-typescript';
import User from './User';

@Table
export default class Item extends Model<Item> {
    @Column
    public name!: string;

    @ForeignKey(() => User) @Column
    public createdBy!: number;

    @CreatedAt
    public readonly createdAt!: Date;

    @UpdatedAt
    public readonly updatedAt!: Date;
}
