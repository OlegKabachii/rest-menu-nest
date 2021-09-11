import { Info } from "../models/info.models";
import { CreateInfoDto } from "../dto/info/create-info.dto";
export declare class InfoService {
    private infoRepository;
    constructor(infoRepository: typeof Info);
    createInfo(infoDto: CreateInfoDto): Promise<any>;
    getAllInfo(): Promise<any>;
}
