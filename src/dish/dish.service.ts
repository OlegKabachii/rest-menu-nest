import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DishDto } from "./dish.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Dish } from "./dish.model";


@Injectable()
export class DishService {

  constructor(@InjectModel(Dish) private dishRepository: typeof Dish) {
  }

  async createDish(dishDto: DishDto) {
    const name = await this.dishRepository.findAll()
      .then((res) => {
        return res.filter((el) => el.getDataValue("dishName") === dishDto.dishName)
      });
    if (name.length) {
      throw new HttpException("Dish name is exist", HttpStatus.NOT_FOUND)
    }
    return await this.dishRepository.create(dishDto)

  }

  async getAllDishByCategoryId(id: string) {
    return await this.dishRepository.findAll()
      .then((res) => {
        return res.filter((el) => el.getDataValue("categoryId") === id)
      });
  }

  async updateDishById(id: string, dishDto: DishDto) {
    const name = await this.dishRepository.findAll()
      .then((res) => {
        return res.filter((el) => el.getDataValue("dishName") === dishDto.dishName)
      });
    const isSame = name.some((el)=> el.id !== id)

    if (name.length && isSame) {
      throw new HttpException("Dish name is exist", HttpStatus.NOT_FOUND)
    }
    const dish = await this.dishRepository.findByPk(id)
    if (!dish) {
      throw new HttpException("Dish not found", HttpStatus.NOT_FOUND)
    }
    return await dish.update(dishDto)
  }

  async removeDishById(id: string) {
    const dishId = await this.dishRepository.destroy({
      where: { id }
    });
    if (!dishId) {
      throw new HttpException("Category not found", HttpStatus.NOT_FOUND)
    }
  }


}
