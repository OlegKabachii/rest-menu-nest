"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const category_model_1 = require("./category.model");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async createCategory(categoryDto) {
        const name = await this.categoryRepository.findAll()
            .then((res) => {
            return res.filter((el) => el.getDataValue("categoryName") === categoryDto.categoryName);
        });
        if (name.length) {
            throw new common_1.HttpException("Category name is exist", common_1.HttpStatus.NOT_FOUND);
        }
        return await this.categoryRepository.create(categoryDto);
    }
    async getAllCategory() {
        return await this.categoryRepository.findAll();
    }
    async getCategoryById(id) {
        const category = await this.categoryRepository.findByPk(id);
        if (!category) {
            throw new common_1.HttpException("Category not found", common_1.HttpStatus.NOT_FOUND);
        }
        return category;
    }
    async updateCategoryById(id, categoryDto) {
        const category = await this.categoryRepository.findByPk(id);
        if (!category) {
            throw new common_1.HttpException("Category not found", common_1.HttpStatus.NOT_FOUND);
        }
        return await category.update(categoryDto);
    }
    async removeCategoryById(id) {
        const category = await this.categoryRepository.destroy({
            where: { id }
        });
        if (!category) {
            throw new common_1.HttpException('Category not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(category_model_1.Category)),
    __metadata("design:paramtypes", [Object])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map