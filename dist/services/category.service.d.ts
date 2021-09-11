import { CreateCategoryDto } from "../dto/category/create-category.dto";
import { Category } from "../models/category.model";
import { UpdateCategoryDto } from "../dto/category/update-category.dto";
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: typeof Category);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
    getAllCategory(): Promise<Category[]>;
    getCategoryById(id: string): Promise<Category>;
    updateCategoryById(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    removeCategoryById(id: string): Promise<Category>;
}
