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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UsersService = class UsersService {
    constructor() {
        this.repo = typeorm_2.getRepository(user_entity_1.User);
    }
    findAll() {
        return this.repo.find();
    }
    findOne(name) {
        return rxjs_1.from(this.repo.find({ name }));
    }
    async remove(id) {
        await this.repo.delete(id);
    }
    async create(user) {
        await this.repo.save(user);
    }
    findByMail(email) {
        return rxjs_1.from(this.repo.findOne(email));
    }
};
__decorate([
    typeorm_1.InjectRepository(user_entity_1.User),
    __metadata("design:type", Object)
], UsersService.prototype, "repo", void 0);
UsersService = __decorate([
    common_1.Injectable()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map