import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { DishController } from "./dish.controller";
import { DishService } from "./dish.service";
import { Dish } from "./dish.model";
import { UploadService } from "./upload.service";
import { CloudinaryService } from "../utils/cloudinary/clodinary.service";


@Module({
  controllers: [DishController],
  providers: [DishService, UploadService, CloudinaryService],
  imports :[
    SequelizeModule.forFeature([Dish]),

  ]
})
export class DishModule{}
