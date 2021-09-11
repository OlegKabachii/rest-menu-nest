import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Dish } from "../dish/dish.model";
import { ApiProperty } from "@nestjs/swagger";

interface CategoryCreationAttrs {
  categoryName: string
  categoryAvailable: boolean
}

@Table({tableName: 'category'})
export class Category extends Model<Category, CategoryCreationAttrs>{

  // @ApiProperty({example: '1', description: 'Unique ID' })
  // @Column({type:DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
  // id: number

  @ApiProperty({example: 'SALADS', description: 'Category name' })
  @Column({type:DataType.STRING, unique:true, allowNull: false})
  categoryName: string

  @ApiProperty({example: 'true', description: 'If category available' })
  @Column({type:DataType.BOOLEAN, defaultValue: true})
  categoryAvailable: boolean

  @HasMany(()=> Dish)
  dish: Dish[]


}
