import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { Category } from "./category.model";
import { UploadService } from "../dish/upload.service";


@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports :[
    SequelizeModule.forFeature([Category])
  ]
})

export class CategoryModule{}
