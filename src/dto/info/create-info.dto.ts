import { ApiProperty } from "@nestjs/swagger";

export class CreateInfoDto{
  @ApiProperty({example: 'Street, 20a', description: 'Restaurant address'})
  readonly address: string
  @ApiProperty({example: '111-111-111', description: 'Restaurant phone' })
  readonly phone: string
  @ApiProperty({example: 'MyWifi - 1234', description: 'WIFI (Login - password)'})
  readonly wifi: string
}
