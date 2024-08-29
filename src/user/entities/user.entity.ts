import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  userName: string;

  @Field({ nullable: true })
  displayName?: string;
}
