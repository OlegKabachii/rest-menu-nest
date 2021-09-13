import { DishService } from "./dish.service";
import { DishDto } from "./dish.dto";
import { Dish } from "./dish.model";
export declare class DishController {
    private readonly dishService;
    constructor(dishService: DishService);
    createDish(dishDto: DishDto): Promise<Dish>;
    getAllDishByCategoryId(id: string): Promise<Dish[]>;
    updateDishById(id: string, dishDto: DishDto): Promise<Dish>;
    removeDishById(id: string): Promise<void>;
}
