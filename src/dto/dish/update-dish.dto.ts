import { ApiProperty } from "@nestjs/swagger";

export class UpdateDishDto{
  @ApiProperty({example: 'Cezar', description: 'Dish name' })
  readonly dishName: string
  @ApiProperty({example: 'The best salads include: ... ... ...', description: 'Dish`s description' })
  readonly dishDescription:string
  @ApiProperty({example: '100/200', description: 'Dish weight enter through the slash' })
  readonly dishWeight:string
  @ApiProperty({example: '$ 10/20', description: 'Dish price enter through the slash' })
  readonly dishPrice:string
  @ApiProperty({example: 'true', description: 'If dish available' })
  readonly dishAvailable: boolean
  @ApiProperty({example: '1', description: 'Category ID (ForeignKey)' })
  readonly categoryId: number
}
