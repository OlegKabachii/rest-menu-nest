import { Model } from "sequelize-typescript";
import { Dish } from "./dish.model";
interface CategoryCreationAttrs {
    categoryName: string;
    categoryAvailable: boolean;
}
export declare class Category extends Model<Category, CategoryCreationAttrs> {
    id: number;
    categoryName: string;
    categoryAvailable: boolean;
    dish: Dish[];
}
export {};
