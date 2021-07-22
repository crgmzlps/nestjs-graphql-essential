import { Query, Resolver } from '@nestjs/graphql';
import { Pet } from './models/entities/pet.entity';
import { PetsService } from './pets.service';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}
  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petsService.findAll();
  }
}
