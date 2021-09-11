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
exports.DishService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const dish_model_1 = require("../models/dish.model");
let DishService = class DishService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }
    async createDish(createDishDto) {
        return await this.dishRepository.create(createDishDto);
    }
    async getAllDishByCategoryId(id) {
        return await this.dishRepository.findAll()
            .then((res) => {
            return res.filter((el) => el.getDataValue("categoryId") === +id);
        });
    }
    async updateDishById(id, dishDto) {
        const dish = await this.dishRepository.findByPk(id);
        if (!dish) {
            throw new common_1.HttpException("Dishs not found", common_1.HttpStatus.NOT_FOUND);
        }
        return await dish.update(dishDto);
    }
};
DishService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(dish_model_1.Dish)),
    __metadata("design:paramtypes", [Object])
], DishService);
exports.DishService = DishService;
//# sourceMappingURL=dish.service.js.map