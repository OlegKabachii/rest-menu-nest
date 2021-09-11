import { CategoryDto } from "./category.dto";
import { CategoryService } from "./category.service";
import { Category } from "./category.model";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(createCategoryDto: CategoryDto): Promise<Category>;
    getAllCategory(): Promise<Category[]>;
    getCategoryById(id: string): Promise<Category>;
    updateCategoryById(categoryDto: CategoryDto, id: string): Promise<Category>;
    removeCategory(id: string): Promise<Category>;
}
