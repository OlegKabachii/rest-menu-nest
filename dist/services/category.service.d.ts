import { CreateCategoryDto } from "../dto/category/create-category.dto";
import { Category } from "../models/category.model";
import { UpdateCategoryDto } from "../dto/category/update-category.dto";
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: typeof Category);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<any>;
    getAllCategory(): Promise<any>;
    getCategoryById(id: string): Promise<any>;
    updateCategoryById(id: string, updateCategoryDto: UpdateCategoryDto): Promise<any>;
    removeCategoryById(id: string): Promise<any>;
}
