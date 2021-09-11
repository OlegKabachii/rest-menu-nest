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
exports.Dish = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const category_model_1 = require("./category.model");
const swagger_1 = require("@nestjs/swagger");
let Dish = class Dish extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unique ID' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Dish.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cezar', description: 'Dish name' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false }),
    __metadata("design:type", String)
], Dish.prototype, "dishName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'The best salads include: ... ... ...', description: 'Dish`s description' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Dish.prototype, "dishDescription", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '100/200', description: 'Dish weight enter through the slash' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Dish.prototype, "dishWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '$ 10/20', description: 'Dish price enter through the slash' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Dish.prototype, "dishPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '', description: 'Image' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Dish.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'If dish available' }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true }),
    __metadata("design:type", Boolean)
], Dish.prototype, "dishAvailable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Category ID (ForeignKey)' }),
    (0, sequelize_typescript_1.ForeignKey)(() => category_model_1.Category),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Dish.prototype, "categoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => category_model_1.Category),
    __metadata("design:type", category_model_1.Category)
], Dish.prototype, "category", void 0);
Dish = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'dish' })
], Dish);
exports.Dish = Dish;
//# sourceMappingURL=dish.model.js.map