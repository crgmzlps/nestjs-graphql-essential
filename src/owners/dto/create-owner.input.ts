import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';

@InputType()
export class CreateOwnerInput {
  @Field()
  @IsNotEmpty()
  @Length(3, 50)
  name: string;
}
