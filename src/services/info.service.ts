import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Info } from "../models/info.models";
import { CreateInfoDto } from "../dto/info/create-info.dto";

@Injectable()
export class InfoService {

  constructor(@InjectModel(Info) private infoRepository: typeof Info) {
  }

  async createInfo(infoDto: CreateInfoDto) {
    return await this.infoRepository.create(infoDto);
  }

  async getAllInfo() {
    return await this.infoRepository.findAll();
  }

}
