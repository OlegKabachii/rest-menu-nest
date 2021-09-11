import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UsePipes } from "@nestjs/common";
import { DishService } from "./dish.service";
import { DishDto } from "./dish.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Dish } from "./dish.model";
import { ValidationsPipes } from "../utils/validations.pipes";

@ApiTags('Dish')
@Controller('dish')
export class DishController {

  constructor(private readonly dishService: DishService) {
  }

  @ApiOperation({summary: 'Create dish'})
  @ApiResponse({status: 201, type: Dish})
  @UsePipes(ValidationsPipes)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createDish(@Body() createDish: DishDto ){
    return this.dishService.createDish(createDish)
  }

  @ApiOperation({summary: 'Get all dish by category ID'})
  @ApiResponse({status: 200, type: [Dish]})
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getAllDishByCategoryId(@Param('id') id: number){
    return this.dishService.getAllDishByCategoryId(id)
  }

  @ApiOperation({summary: 'Update dish by id'})
  @ApiResponse({status: 200, type: Dish})
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateDishById(@Param('id') id: number, @Body() dishDto: DishDto){
   return this.dishService.updateDishById(id, dishDto)
  }

  @ApiOperation({summary: 'Delete dish by id'})
  @ApiResponse({status: 200, type: Dish})
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  removeDishById(@Param('id') id: number){
    return this.dishService.removeDishById(id)
  }


}
