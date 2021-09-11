import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CategoryDto } from "./category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./category.model";

@Injectable()
export class CategoryService {

  constructor(@InjectModel(Category) private categoryRepository: typeof Category) {
  }

  async createCategory(createCategoryDto: CategoryDto) {
    return await this.categoryRepository.create(createCategoryDto);
  }

  async getAllCategory() {
    return await this.categoryRepository.findAll();
  }

  async getCategoryById(id: number) {
    const category = await this.categoryRepository.findByPk(id);
    if (!category) {
      throw new HttpException("Category not found", HttpStatus.NOT_FOUND);
    }
    return category;
  }

  async updateCategoryById(id: number, categoryDto: CategoryDto) {
    const category = await this.categoryRepository.findByPk(id);
    if (!category) {
      throw new HttpException("Category not found", HttpStatus.NOT_FOUND);
    }
    return await category.update(categoryDto);
  }

  async removeCategoryById(id: string){
    const category = await this.categoryRepository.destroy({
      where: {id}})
    if(!category){
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }
   return category;

  }


}
