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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../user/user.entity");
const rxjs_1 = require("rxjs");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(name, pass) {
        const user = await this.usersService.findOne(name);
        console.log(name + " name z validateuser");
        console.log(pass + "   pass z validateuser");
        console.log(user.subscribe());
    }
    comparePasswords(newPassword, passwortHash) {
        return rxjs_1.from(bcrypt.compare(newPassword, passwortHash));
    }
    async login(user) {
        const payload = { username: user.username, password: user.password };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async register(userData) {
        const payload = { name: userData.name, password: userData.password };
        const access_token = this.jwtService.sign(payload);
        console.log(access_token);
        return await this.usersService.create(userData);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map