import { CategoryDto } from "./category.dto";
import { Category } from "./category.model";
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: typeof Category);
    createCategory(createCategoryDto: CategoryDto): Promise<Category>;
    getAllCategory(): Promise<Category[]>;
    getCategoryById(id: string): Promise<Category>;
    updateCategoryById(id: string, categoryDto: CategoryDto): Promise<Category>;
    removeCategoryById(id: string): Promise<Category>;
}
