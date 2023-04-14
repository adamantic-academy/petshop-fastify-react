import {Animal} from '../entity';

export interface AnimalContractServiceInterface {
    creteAnimal(animal: Animal): Promise<string>;
}
