import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Info } from "./info.models";
import { InfoDto } from "./info.dto";

@Injectable()
export class InfoService {

  constructor(@InjectModel(Info) private infoRepository: typeof Info) {
  }

  async createInfo(infoDto: InfoDto) {
    return await this.infoRepository.create(infoDto);
  }

  async getAllInfo() {
    return await this.infoRepository.findAll();
  }

}
