import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post, Res, UploadedFile,
  UseInterceptors,
  UsePipes
} from "@nestjs/common";
import { DishService } from "./dish.service";
import { DishDto } from "./dish.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Dish } from "./dish.model";
import { ValidationsPipes } from "../utils/validations.pipes";
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadService } from "./upload.service";
import { Response } from "express";

@ApiTags('Dish')
@Controller('dish')
export class DishController {

  constructor(
    private readonly dishService: DishService,
    private readonly uploadService: UploadService
              ) {
  }

  @ApiOperation({summary: 'Create dish'})
  @ApiResponse({status: 201, type: Dish})
  // @UsePipes(ValidationsPipes)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createDish(@Body() dishDto: DishDto ){
    console.log(dishDto);
    return this.dishService.createDish(dishDto)
  }

  @ApiOperation({summary: 'Get all dish by category ID'})
  @ApiResponse({status: 200, type: [Dish]})
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getAllDishByCategoryId(@Param('id') id: string){
    return this.dishService.getAllDishByCategoryId(id)
  }

  @ApiOperation({summary: 'Update dish by id'})
  @ApiResponse({status: 200, type: Dish})
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateDishById(@Param('id') id: string, @Body() dishDto: DishDto){
   return this.dishService.updateDishById(id, dishDto)
  }

  @ApiOperation({summary: 'Delete dish by id'})
  @ApiResponse({status: 200, type: Dish})
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  removeDishById(@Param('id') id: string){
    return this.dishService.removeDishById(id)
  }

  @ApiOperation({summary: 'Image uploaded'})
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
   return this.uploadService.uploadImageToCloudinary(file).then((text)=> res.status(203).json(text))
  }



}
