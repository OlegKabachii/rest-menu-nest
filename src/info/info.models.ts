import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface InfoCreationAttrs {
  address: string;
  phone: string;
  wifi: string;
}

@Table({ tableName: "info" })
export class Info extends Model<Info, InfoCreationAttrs> {

  @ApiProperty({ example: "Street, 20a", description: "Restaurant address" })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @ApiProperty({ example: "111-111-111", description: "Restaurant phone" })
  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @ApiProperty({ example: "MyWifi - 1234", description: "WIFI (Login - password)" })
  @Column({ type: DataType.STRING, allowNull: false })
  wifi: string;

}
