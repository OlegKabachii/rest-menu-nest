import { ApiProperty } from "@nestjs/swagger";

export class InfoDto{

  @ApiProperty({example: 'Steet, 20a', description: 'Address' })
  readonly address: string
  @ApiProperty({example: '111-111-111', description: 'Phone number' })
  readonly phone:string
  @ApiProperty({example: 'WIFI - MyWifi: 1234', description: 'WIFI - Login/Password' })
  readonly wifi:string
}
