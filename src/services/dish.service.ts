import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateDishDto } from "../dto/dish/create-dish.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Dish } from "../models/dish.model";


@Injectable()
export class DishService {

  constructor(@InjectModel(Dish) private dishRepository: typeof Dish) {
  }

  async createDish(createDishDto: CreateDishDto) {
    return await this.dishRepository.create(createDishDto);
  }

  async getAllDishByCategoryId(id: number) {
    //todo: find by id
    return await this.dishRepository.findAll()
      .then((res) => {
        return res.filter((el) => el.getDataValue("categoryId") === +id);
      });
  }

  //todo: update by id
  async updateDishById(id: number, dishDto: CreateDishDto) {
    const dish = await this.dishRepository.findByPk(id);
    if(!dish) {
      throw new HttpException("Dishs not found", HttpStatus.NOT_FOUND);
    }
    return await dish.update(dishDto);
  }

  //todo: remove by id
  // async removeDishById(id: number) {
  //   const dishId = await this.dishRepository.destroy(Dish, {id})
  //   new HttpException("Category not found", HttpStatus.NOT_FOUND);
  //
  // }


}
