import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './models/entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private readonly petsRepository: Repository<Pet>,
  ) {}
  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find();
  }
}
