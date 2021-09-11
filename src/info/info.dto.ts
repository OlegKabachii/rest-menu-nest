import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class InfoDto{

  @ApiProperty({example: 'Street, 20a', description: 'Address' })
  @IsString({message: 'string type'})
  readonly address: string

  @ApiProperty({example: '111-111-111', description: 'Phone number' })
  @IsString({message: 'string type'})
  readonly phone:string

  @ApiProperty({example: 'WIFI - MyWifi: 1234', description: 'WIFI - Login/Password' })
  @IsString({message: 'string type'})
  readonly wifi:string
}
