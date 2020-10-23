"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const user_service_1 = require("../user/user.service");
const auth_service_1 = require("./auth.service");
const local_strategy_1 = require("./local.strategy");
const jwt_strategy_1 = require("./jwt.strategy");
const a_1 = require("../../a");
const user_module_1 = require("../user/user.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [passport_1.PassportModule, user_module_1.UsersModule, jwt_1.JwtModule.register({
                secret: a_1.a.JWT_SECRET,
                signOptions: { expiresIn: '600s' }
            })],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, user_service_1.UsersService],
        exports: [auth_service_1.AuthService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map