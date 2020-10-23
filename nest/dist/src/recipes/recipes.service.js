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
exports.RecipesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const recipes_entity_1 = require("./recipes.entity");
let RecipesService = class RecipesService {
    constructor() {
        this.repo = typeorm_2.getRepository(recipes_entity_1.Recipes);
    }
    findAll() {
        return this.repo.find();
    }
    findOne(id) {
        return this.repo.findOne(id);
    }
    async remove(id) {
        await this.repo.delete(id);
    }
    async create(recipes) {
        await this.repo.save(recipes);
    }
};
__decorate([
    typeorm_1.InjectRepository(recipes_entity_1.Recipes),
    __metadata("design:type", Object)
], RecipesService.prototype, "repo", void 0);
RecipesService = __decorate([
    common_1.Injectable()
], RecipesService);
exports.RecipesService = RecipesService;
//# sourceMappingURL=recipes.service.js.map