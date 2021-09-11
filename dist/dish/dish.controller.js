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
exports.DishController = void 0;
const common_1 = require("@nestjs/common");
const dish_service_1 = require("./dish.service");
const dish_dto_1 = require("./dish.dto");
const swagger_1 = require("@nestjs/swagger");
const dish_model_1 = require("./dish.model");
let DishController = class DishController {
    constructor(dishService) {
        this.dishService = dishService;
    }
    createDish(createDish) {
        return this.dishService.createDish(createDish);
    }
    getAllDishByCategoryId(id) {
        return this.dishService.getAllDishByCategoryId(id);
    }
    updateDishById(id, dishDto) {
        return this.dishService.updateDishById(id, dishDto);
    }
    removeDishById(id) {
        return this.dishService;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create dish' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: dish_model_1.Dish }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dish_dto_1.DishDto]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "createDish", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all dish by category ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [dish_model_1.Dish] }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "getAllDishByCategoryId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update dish by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: dish_model_1.Dish }),
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dish_dto_1.DishDto]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "updateDishById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete dish by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: dish_model_1.Dish }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DishController.prototype, "removeDishById", null);
DishController = __decorate([
    (0, swagger_1.ApiTags)('Dish'),
    (0, common_1.Controller)('dish'),
    __metadata("design:paramtypes", [dish_service_1.DishService])
], DishController);
exports.DishController = DishController;
//# sourceMappingURL=dish.controller.js.map