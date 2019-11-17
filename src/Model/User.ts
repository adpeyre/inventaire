import {
  Model, Table, Column, HasMany, CreatedAt, UpdatedAt,
} from 'sequelize-typescript';
import Item from './Item';

@Table
export default class User extends Model<User> {
    @Column
    public name!: string;

    @Column
    public preferredName!: string | null; // for nullable fields

    @CreatedAt
    public readonly createdAt!: Date;

    @UpdatedAt
    public readonly updatedAt!: Date;

    @HasMany(() => Item)
    public readonly items: Item[];
}
