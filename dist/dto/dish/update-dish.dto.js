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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDishDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateDishDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cezar', description: 'Dish name' }),
    __metadata("design:type", String)
], UpdateDishDto.prototype, "dishName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'The best salads include: ... ... ...', description: 'Dish`s description' }),
    __metadata("design:type", String)
], UpdateDishDto.prototype, "dishDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '100/200', description: 'Dish weight enter through the slash' }),
    __metadata("design:type", String)
], UpdateDishDto.prototype, "dishWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '$ 10/20', description: 'Dish price enter through the slash' }),
    __metadata("design:type", String)
], UpdateDishDto.prototype, "dishPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'If dish available' }),
    __metadata("design:type", Boolean)
], UpdateDishDto.prototype, "dishAvailable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Category ID (ForeignKey)' }),
    __metadata("design:type", Number)
], UpdateDishDto.prototype, "categoryId", void 0);
exports.UpdateDishDto = UpdateDishDto;
//# sourceMappingURL=update-dish.dto.js.map