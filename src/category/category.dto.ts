import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";


export class CategoryDto {

  @ApiProperty({example: 'SALADS', description: 'Category name' })
  @IsString({message: 'string type'})
  readonly categoryName: string

  @ApiProperty({example: 'true', description: 'If category available' })
  @IsBoolean({message: 'boolean type'})
  readonly categoryAvailable: boolean
}
