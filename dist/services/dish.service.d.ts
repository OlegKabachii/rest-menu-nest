import { CreateDishDto } from "../dto/dish/create-dish.dto";
import { Dish } from "../models/dish.model";
export declare class DishService {
    private dishRepository;
    constructor(dishRepository: typeof Dish);
    createDish(createDishDto: CreateDishDto): Promise<any>;
    getAllDishByCategoryId(id: number): Promise<any>;
    updateDishById(id: number, dishDto: CreateDishDto): Promise<any>;
}
