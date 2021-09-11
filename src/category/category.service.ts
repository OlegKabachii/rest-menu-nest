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

  async getCategoryById(id: string) {
    const category = await this.categoryRepository.findByPk(id);
    if (!category) {
      throw new HttpException("Category not found", HttpStatus.NOT_FOUND);
    }
    return category;
  }

  async updateCategoryById(id: string, categoryDto: CategoryDto) {
    const category = await this.categoryRepository.findByPk(id);
    if (!category) {
      throw new HttpException("Category not found", HttpStatus.NOT_FOUND);
    }
    return await category.update(categoryDto);
  }

  //todo: remove by id
  async removeCategoryById(id: string){
    const category = await this.categoryRepository.findOne()
    if(category){
      const categoryRemove = await category
      return categoryRemove
    }
    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);

  }


}
