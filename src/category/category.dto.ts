import { ApiProperty } from "@nestjs/swagger";

export class CategoryDto {
  @ApiProperty({example: 'SALADS', description: 'Category name' })
  readonly categoryName: string
  @ApiProperty({example: 'true', description: 'If category available' })
  readonly categoryAvailable: boolean
}
