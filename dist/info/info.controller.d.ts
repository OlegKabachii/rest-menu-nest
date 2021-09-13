import { InfoService } from "./info.service";
import { Info } from "./info.models";
import { InfoDto } from "./info.dto";
export declare class InfoController {
    private readonly infoService;
    constructor(infoService: InfoService);
    createCategory(infoDto: InfoDto): Promise<Info>;
    getAllCategory(): Promise<Info[]>;
    updateCategoryById(infoDto: InfoDto, id: number): Promise<Info>;
}
