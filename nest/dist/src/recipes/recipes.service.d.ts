import { Recipes } from './recipes.entity';
export declare class RecipesService {
    repo: import("typeorm").Repository<Recipes>;
    findAll(): Promise<Recipes[]>;
    findOne(id: string): Promise<Recipes>;
    remove(id: string): Promise<void>;
    create(recipes: Recipes): Promise<any>;
}
