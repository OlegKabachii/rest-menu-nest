import { CreateCategoryDto } from "./dto/create-category.dto";
export declare class CategoryService {
    private category;
    getAllCategory(): any[];
    getAllById(id: string): any;
    createCategory(categoryDto: CreateCategoryDto): number;
}
