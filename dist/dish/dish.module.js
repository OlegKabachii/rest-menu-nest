"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const dish_controller_1 = require("./dish.controller");
const dish_service_1 = require("../services/dish.service");
const dish_model_1 = require("../models/dish.model");
let DishModule = class DishModule {
};
DishModule = __decorate([
    (0, common_1.Module)({
        controllers: [dish_controller_1.DishController],
        providers: [dish_service_1.DishService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([dish_model_1.Dish])
        ]
    })
], DishModule);
exports.DishModule = DishModule;
//# sourceMappingURL=dish.module.js.map