import { Model } from "sequelize-typescript";
interface InfoCreationAttrs {
    address: string;
    phone: string;
    wifi: string;
}
export declare class Info extends Model<Info, InfoCreationAttrs> {
    address: string;
    phone: string;
    wifi: string;
}
export {};
