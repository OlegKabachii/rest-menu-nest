import { CreateInfoDto } from "../dto/info/create-info.dto";
import { InfoService } from "../services/info.service";
import { Info } from "../models/info.models";
export declare class InfoController {
    private readonly infoService;
    constructor(infoService: InfoService);
    createCategory(createInfoDto: CreateInfoDto): Promise<Info>;
    getAllCategory(): Promise<Info[]>;
}
