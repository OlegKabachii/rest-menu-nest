import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { DishController } from "./dish.controller";
import { DishService } from "../services/dish.service";
import { Dish } from "../models/dish.model";


@Module({
  controllers: [DishController],
  providers: [DishService],
  imports :[
    SequelizeModule.forFeature([Dish])
  ]
})
export class DishModule{}
