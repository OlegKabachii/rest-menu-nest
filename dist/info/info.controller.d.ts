import { InfoService } from "./info.service";
import { Info } from "./info.models";
import { InfoDto } from "./info.dto";
export declare class InfoController {
    private readonly infoService;
    constructor(infoService: InfoService);
    getAllInfo(): Promise<Info[]>;
    updateInfo(infoDto: InfoDto, id: number): Promise<Info>;
}
