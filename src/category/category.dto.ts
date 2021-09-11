import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";


export class CategoryDto {
  @ApiProperty({example: 'SALADS', description: 'Category name' })
  @IsString({message: 'string type'})
  readonly categoryName: string

  @IsBoolean({message: 'boolean type'})
  @ApiProperty({example: 'true', description: 'If category available' })
  readonly categoryAvailable: boolean
}
