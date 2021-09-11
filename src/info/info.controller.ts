import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateInfoDto } from "../dto/info/create-info.dto";
import { InfoService } from "../services/info.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Dish } from "../models/dish.model";
import { Info } from "../models/info.models";

@ApiTags('Info')
@Controller('info')
export class InfoController {

  constructor(private readonly infoService: InfoService) {
  }

  @ApiOperation({summary: 'Create INFO'})
  @ApiResponse({status: 201, type: Info})
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCategory(@Body() createInfoDto: CreateInfoDto){
    return this.infoService.createInfo(createInfoDto)
  }

  @ApiOperation({summary: 'Get INFO'})
  @ApiResponse({status: 200, type: [Info]})
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllCategory(){
    return this.infoService.getAllInfo()
  }


}
