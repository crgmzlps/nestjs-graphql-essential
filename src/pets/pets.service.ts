import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from '../owners/entities/owner.entity';
import { OwnersService } from '../owners/owners.service';
import { CreatePetInput } from './models/dto/create-pet.input';
import { Pet } from './models/entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petsRepository: Repository<Pet>,
    private readonly ownersSerive: OwnersService,
  ) {}
  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }
  async findById(id: number) {
    return this.petsRepository.findOneOrFail(id);
  }
  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(newPet);
  }
  async getOwner(ownerId: number): Promise<Owner> {
    return this.ownersSerive.findOne(ownerId);
  }
}
