import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post, UploadedFile, UseInterceptors,
  UsePipes
} from "@nestjs/common";
import { CategoryDto } from "./category.dto";
import { CategoryService } from "./category.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Category } from "./category.model";
import { ValidationsPipes } from "../utils/validations.pipes";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags('Category')
@Controller('category')
export class CategoryController {

  constructor(private readonly categoryService: CategoryService) {
  }

  @ApiOperation({summary: 'Create category'})
  @ApiResponse({status: 201, type: Category})
  @UsePipes(ValidationsPipes)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCategory(@Body() createCategoryDto: CategoryDto){
    return this.categoryService.createCategory(createCategoryDto)
  }

  @ApiOperation({summary: 'Get all category'})
  @ApiResponse({status: 200, type: [Category]})
  @UsePipes(ValidationsPipes)
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllCategory(){
    return this.categoryService.getAllCategory()
  }

  @ApiOperation({summary: 'Get one category by id'})
  @ApiResponse({status: 200, type: Category})
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getCategoryById(@Param('id') id: string){
    return this.categoryService.getCategoryById(id)
  }

  @ApiOperation({summary: 'Update one category by id'})
  @ApiResponse({status: 200, type: Category})
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateCategoryById(@Body() categoryDto: CategoryDto, @Param('id') id: string){
    return this.categoryService.updateCategoryById(id, categoryDto)
  }

  @ApiOperation({summary: 'Remove one category by id'})
  @ApiResponse({status: 200, type: Category})
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  removeCategory(@Param('id') id: string){
    return this.categoryService.removeCategoryById(id)
  }

}
