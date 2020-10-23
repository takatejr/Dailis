import { Recipes } from './recipes.entity';
import { RecipesService } from './recipes.service';
export declare class RecipesController {
    private readonly usersService;
    constructor(usersService: RecipesService);
    getHello(): Promise<Recipes[]>;
    create(recipes: Recipes): Promise<void>;
}
