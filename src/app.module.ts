import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { Category } from "./category/category.model";
import { Dish } from "./dish/dish.model";
import { Info } from "./info/info.models";
import { CategoryModule } from "./category/category.module";
import { DishModule } from "./dish/dish.module";
import { InfoModule } from "./info/info.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Category, Dish, Info],
      autoLoadModels: true
    }),
    CategoryModule,
    DishModule,
    InfoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
