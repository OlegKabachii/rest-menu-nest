import { DishService } from "../services/dish.service";
import { UpdateDishDto } from "../dto/dish/update-dish.dto";
import { CreateDishDto } from "../dto/dish/create-dish.dto";
import { Dish } from "../models/dish.model";
export declare class DishController {
    private readonly dishService;
    constructor(dishService: DishService);
    createDish(createDish: CreateDishDto): Promise<Dish>;
    getAllDishByCategoryId(id: number): Promise<Dish[]>;
    updateDishById(updateDishDto: UpdateDishDto, id: number): void;
    removeDishById(id: string): void;
}
