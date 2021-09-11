import { Model } from "sequelize-typescript";
import { Category } from "./category.model";
interface DishCreationAttrs {
    dishName: string;
    dishDescription: string;
    dishWeight: string;
    dishPrice: string;
    image: string;
    dishAvailable: boolean;
    categoryId: number;
}
export declare class Dish extends Model<Dish, DishCreationAttrs> {
    id: number;
    dishName: string;
    dishDescription: string;
    dishWeight: string;
    dishPrice: string;
    image: string;
    dishAvailable: boolean;
    categoryId: number;
    category: Category;
}
export {};
