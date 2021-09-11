import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import { CreateCategoryDto } from "../dto/category/create-category.dto";
import { UpdateCategoryDto } from "../dto/category/update-category.dto";
import { CategoryService } from "../services/category.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Category } from "../models/category.model";

@ApiTags('Category')
@Controller('category')
export class CategoryController {

  constructor(private readonly categoryService: CategoryService) {
  }

  //todo: handle status code
  @ApiOperation({summary: 'Create category'})
  @ApiResponse({status: 201, type: Category})
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCategory(@Body() createCategoryDto: CreateCategoryDto){
    return this.categoryService.createCategory(createCategoryDto)
  }

  @ApiOperation({summary: 'Get all category'})
  @ApiResponse({status: 200, type: [Category]})
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

  //todo: put by id
  @ApiOperation({summary: 'Update one category by id'})
  @ApiResponse({status: 200, type: Category})
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateCategoryById(@Body() updateCategoryDto: UpdateCategoryDto, @Param('id') id: string){
    return this.categoryService.updateCategoryById(id, updateCategoryDto)
  }

  //todo: delete by id
  @ApiOperation({summary: 'Remove one category by id'})
  @ApiResponse({status: 200, type: Category})
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  removeCategory(@Param('id') id: string){
    return this.categoryService.removeCategoryById(id)
  }



}
