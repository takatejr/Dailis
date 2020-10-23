"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_module_1 = require("@nestjs/typeorm/dist/typeorm.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./user/user.entity");
const user_module_1 = require("./user/user.module");
const recipes_module_1 = require("./recipes/recipes.module");
const daily_module_1 = require("./daily-lists/daily.module");
const recipes_entity_1 = require("./recipes/recipes.entity");
const daily_entity_1 = require("./daily-lists/daily.entity");
const auth_module_1 = require("./auth/auth.module");
const user_service_1 = require("./user/user.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_module_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'test',
                password: 'test',
                database: 'test',
                entities: [user_entity_1.User, recipes_entity_1.Recipes, daily_entity_1.DailyLists],
                synchronize: false,
            }), user_module_1.UsersModule, recipes_module_1.RecipesModule, daily_module_1.DailyListsModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, user_service_1.UsersService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map