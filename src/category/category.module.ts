import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CategoryController } from "./category.controller";
import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";


@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports :[
    SequelizeModule.forFeature([Category])
  ]
})

export class CategoryModule{}
