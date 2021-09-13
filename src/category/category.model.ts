import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Dish } from "../dish/dish.model";
import { ApiProperty } from "@nestjs/swagger";

interface CategoryCreationAttrs {
  categoryName: string;
  categoryAvailable: boolean;
}

@Table({ tableName: "category" })
export class Category extends Model<Category, CategoryCreationAttrs> {

  @ApiProperty({ example: "e06db0ef-ebe5-465b-a233-47d204469fa9", description: "Unique ID" })
  @Column({ type: DataType.UUID, primaryKey: true,  defaultValue: DataType.UUIDV4 })
  id: string;

  @ApiProperty({ example: "SALADS", description: "Category name" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  categoryName: string;

  @ApiProperty({ example: "true", description: "If category available" })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  categoryAvailable: boolean;

  @HasMany(() => Dish)
  dish: Dish[];


}
