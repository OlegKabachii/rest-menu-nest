import { Injectable, BadRequestException } from '@nestjs/common';
import {CloudinaryService } from "../utils/cloudinary/clodinary.service";


@Injectable()
export class UploadService {
  constructor(private cloudinary: CloudinaryService) {}
  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await (await this.cloudinary.uploadImage(file)).url
   }
}
