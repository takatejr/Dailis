"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyListsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const daily_service_1 = require("./daily.service");
const daily_controller_1 = require("./daily.controller");
const daily_entity_1 = require("./daily.entity");
let DailyListsModule = class DailyListsModule {
};
DailyListsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([daily_entity_1.DailyLists])],
        providers: [daily_service_1.DailyListsService],
        controllers: [daily_controller_1.DailyListsController],
        exports: [typeorm_1.TypeOrmModule]
    })
], DailyListsModule);
exports.DailyListsModule = DailyListsModule;
//# sourceMappingURL=daily.module.js.map