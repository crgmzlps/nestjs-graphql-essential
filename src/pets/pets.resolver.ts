import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePetInput } from './models/dto/create-pet.input';
import { Pet } from './models/entities/pet.entity';
import { PetsService } from './pets.service';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}
  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }
  @Query((returns) => Pet)
  async getPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {
    return await this.petsService.findById(id);
  }
  @Mutation((returns) => Pet)
  async createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return await this.petsService.createPet(createPetInput);
  }
}
