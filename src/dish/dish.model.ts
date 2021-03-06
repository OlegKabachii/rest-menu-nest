import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "../category/category.model";
import { ApiProperty } from "@nestjs/swagger";

interface DishCreationAttrs {
  dishName: string;
  dishDescription: string;
  dishWeight: string;
  dishPrice: string;
  image: string;
  dishAvailable: boolean;
  categoryId: string;
}

@Table({ tableName: "dish" })
export class Dish extends Model<Dish, DishCreationAttrs> {

  @ApiProperty({ example: "e06db0ef-ebe5-465b-a233-47d204469fa9", description: "Unique ID" })
  @Column({ type: DataType.UUID, unique: true, primaryKey: true, defaultValue: DataType.UUIDV4 })
  id: string;

  @ApiProperty({ example: "Cezar", description: "Dish name" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  dishName: string;

  @ApiProperty({ example: "The best salads include: ... ... ...", description: "Dish`s description" })
  @Column({ type: DataType.STRING, allowNull: false })
  dishDescription: string;

  @ApiProperty({ example: "100/200", description: "Dish weight enter through the slash" })
  @Column({ type: DataType.STRING, allowNull: false })
  dishWeight: string;

  @ApiProperty({ example: "$ 10/20", description: "Dish price enter through the slash" })
  @Column({ type: DataType.STRING, allowNull: false })
  dishPrice: string;

  @ApiProperty({example: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png", description: "Image"})
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({ example: "true", description: "If dish available" })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  dishAvailable: boolean;

  @ApiProperty({ example: "e06db0ef-ebe5-465b-a233-47d204469fa9", description: "Category ID (ForeignKey)" })
  @ForeignKey(() => Category)
  @Column({ type: DataType.UUID })
  categoryId: string;

  @BelongsTo(() => Category)
  category: Category;


}
