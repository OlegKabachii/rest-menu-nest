import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { InfoController } from "./info.controller";
import { InfoService } from "./info.service";
import { Info } from "./info.models";


@Module({
  controllers: [InfoController],
  providers: [InfoService],
  imports :[
    SequelizeModule.forFeature([Info])
  ]
})

export class InfoModule{}
