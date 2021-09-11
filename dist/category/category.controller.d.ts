import { CreateCategoryDto } from "../dto/category/create-category.dto";
import { UpdateCategoryDto } from "../dto/category/update-category.dto";
import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
    getAllCategory(): Promise<Category[]>;
    getCategoryById(id: string): Promise<Category>;
    updateCategoryById(updateCategoryDto: UpdateCategoryDto, id: string): Promise<Category>;
    removeCategory(id: string): Promise<Category>;
}
