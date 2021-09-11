import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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

  async updateInfo(id: number, infoDto: InfoDto) {
    const info = await this.infoRepository.findByPk(id);
    if (!info) {
      throw new HttpException("Category not found", HttpStatus.NOT_FOUND);
    }
    return await info.update(infoDto);
  }

}
