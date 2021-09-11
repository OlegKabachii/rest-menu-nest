import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { InfoController } from "./info.controller";
import { InfoService } from "../services/info.service";
import { Info } from "../models/info.models";


@Module({
  controllers: [InfoController],
  providers: [InfoService],
  imports :[
    SequelizeModule.forFeature([Info])
  ]
})

export class InfoModule{}
