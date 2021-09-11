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
exports.InfoController = void 0;
const common_1 = require("@nestjs/common");
const info_service_1 = require("./info.service");
const swagger_1 = require("@nestjs/swagger");
const info_models_1 = require("./info.models");
const info_dto_1 = require("./info.dto");
const validations_pipes_1 = require("../utils/validations.pipes");
let InfoController = class InfoController {
    constructor(infoService) {
        this.infoService = infoService;
    }
    createCategory(infoDto) {
        return this.infoService.createInfo(infoDto);
    }
    getAllCategory() {
        return this.infoService.getAllInfo();
    }
    updateCategoryById(infoDto, id) {
        return this.infoService.updateInfo(id, infoDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create INFO' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: info_models_1.Info }),
    (0, common_1.UsePipes)(validations_pipes_1.ValidationsPipes),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [info_dto_1.InfoDto]),
    __metadata("design:returntype", void 0)
], InfoController.prototype, "createCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get INFO' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [info_models_1.Info] }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InfoController.prototype, "getAllCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update info' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: info_models_1.Info }),
    (0, common_1.UsePipes)(validations_pipes_1.ValidationsPipes),
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [info_dto_1.InfoDto, Number]),
    __metadata("design:returntype", void 0)
], InfoController.prototype, "updateCategoryById", null);
InfoController = __decorate([
    (0, swagger_1.ApiTags)('Info'),
    (0, common_1.Controller)('info'),
    __metadata("design:paramtypes", [info_service_1.InfoService])
], InfoController);
exports.InfoController = InfoController;
//# sourceMappingURL=info.controller.js.map