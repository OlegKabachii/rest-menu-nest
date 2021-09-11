import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DishDto } from "./dish.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Dish } from "./dish.model";


@Injectable()
export class DishService {

  constructor(@InjectModel(Dish) private dishRepository: typeof Dish) {
  }

  async createDish(dishDto: DishDto) {
    return await this.dishRepository.create(dishDto);
  }

  async getAllDishByCategoryId(id: number) {
    return await this.dishRepository.findAll()
      .then((res) => {
        return res.filter((el) => el.getDataValue("categoryId") === +id);
      });
  }

  async updateDishById(id: number, dishDto: DishDto) {
    const dish = await this.dishRepository.findByPk(id);
    if (!dish) {
      throw new HttpException("Dish not found", HttpStatus.NOT_FOUND);
    }
    return await dish.update(dishDto);
  }

 // todo: remove by id
  async removeDishById(id: number) {
    const dishId = await this.dishRepository
    new HttpException("Category not found", HttpStatus.NOT_FOUND);

  }


}
