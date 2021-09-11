import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "../dto/category/create-category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "../models/category.model";
import { UpdateCategoryDto } from "../dto/category/update-category.dto";
import { log } from "util";

@Injectable()
export class CategoryService{

  constructor(@InjectModel(Category) private categoryRepository: typeof Category) {
  }

  async createCategory(createCategoryDto: CreateCategoryDto){
    return await this.categoryRepository.create(createCategoryDto)
  }

  async getAllCategory(){
    return await this.categoryRepository.findAll()
  }

  //todo: get by id
  async getCategoryById(id: string){
    const category = await this.categoryRepository.findByPk(id)
    if(category){
      return category
    }
    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);

  }

//todo: update by id
  async updateCategoryById(id: string, updateCategoryDto: UpdateCategoryDto){
    const category = await this.categoryRepository.findByPk(id)
    return  await category.update(updateCategoryDto)

    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);

  }

  //todo: remove by id
  async removeCategoryById(id: string){
    const category = await this.categoryRepository.findByPk(id)
    if(category){
      const categoryRemove = await category
      return categoryRemove
    }
    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);

  }



}
