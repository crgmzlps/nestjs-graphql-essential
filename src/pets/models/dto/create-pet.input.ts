import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field()
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @Field({ nullable: true })
  type?: string;
}
