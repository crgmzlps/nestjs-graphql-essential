import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field()
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Int)
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;
}
