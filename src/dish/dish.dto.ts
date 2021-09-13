import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, Length } from "class-validator";

export class DishDto {
  @ApiProperty({ example: "Cezar", description: "Dish name" })
  @IsString({message: 'string type'})
  readonly dishName: string;

  @ApiProperty({ example: "The best salads include: ... ... ...", description: "Dish`s description" })
  @IsString({message: 'string type'})
  @Length(0,300,{message: 'Not more than 300 symbols'})
  readonly dishDescription: string;

  @ApiProperty({ example: "100/200", description: "Dish weight enter through the slash" })
  @IsString({message: 'string type'})
  readonly dishWeight: string;

  @ApiProperty({ example: "$10/20", description: "Dish price enter through the slash" })
  @IsString({message: 'string type'})
  readonly dishPrice: string;

  @ApiProperty({ example: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png", description: "Dish price enter through the slash" })
  @IsString({message: 'string type'})
  readonly image: string;

  @ApiProperty({ example: "true", description: "If dish available" })
  @IsBoolean({message: 'boolean type'})
  readonly dishAvailable: boolean;

  @ApiProperty({ example: "dfgd45fgdfg453", description: "Category ID (ForeignKey)" })
  @IsString({message: 'string type'})
  readonly categoryId: string;
}
