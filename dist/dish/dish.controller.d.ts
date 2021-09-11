import { DishService } from "./dish.service";
import { DishDto } from "./dish.dto";
import { Dish } from "./dish.model";
export declare class DishController {
    private readonly dishService;
    constructor(dishService: DishService);
    createDish(createDish: DishDto): Promise<Dish>;
    getAllDishByCategoryId(id: number): Promise<Dish[]>;
    updateDishById(id: number, dishDto: DishDto): Promise<Dish>;
    removeDishById(id: string): DishService;
}
