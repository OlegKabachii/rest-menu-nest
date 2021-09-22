import { Body, Controller, Get, Header, HttpCode, HttpStatus, Param, Patch, UsePipes } from "@nestjs/common";
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

  @ApiOperation({summary: 'Get INFO'})
  @ApiResponse({status: 200, type: [Info]})
  @Get()
  @HttpCode(HttpStatus.OK)
  getAllInfo(){
    return this.infoService.getAllInfo()
  }

  @ApiOperation({summary: 'Update info'})
  @ApiResponse({status: 200, type: Info})
  @UsePipes(ValidationsPipes)
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  updateInfo(@Body() infoDto: InfoDto, @Param('id') id: number){
    return this.infoService.updateInfo(id, infoDto)
  }


}
