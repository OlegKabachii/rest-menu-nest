import { Body, Controller, Get, HttpCode, HttpStatus, Post, UsePipes } from "@nestjs/common";
import { InfoService } from "./info.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Info } from "./info.models";
import { InfoDto } from "./info.dto";
import { ValidationsPipes } from "../utils/validations.pipes";

@ApiTags('Info')
@Controller('info')
export class InfoController {

  constructor(private readonly infoService: InfoService) {
  }

  @ApiOperation({summary: 'Create INFO'})
  @ApiResponse({status: 201, type: Info})
  @UsePipes(ValidationsPipes)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCategory(@Body() infoDto: InfoDto){
    return this.infoService.createInfo(infoDto)
  }

  @ApiOperation({summary: 'Get INFO'})
  @ApiResponse({status: 200, type: [Info]})
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllCategory(){
    return this.infoService.getAllInfo()
  }


}
