/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReferentWhereUniqueInput } from "./ReferentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReferentUpdateInput } from "./ReferentUpdateInput";

@ArgsType()
class UpdateReferentArgs {
  @ApiProperty({
    required: true,
    type: () => ReferentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReferentWhereUniqueInput)
  @Field(() => ReferentWhereUniqueInput, { nullable: false })
  where!: ReferentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReferentUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReferentUpdateInput)
  @Field(() => ReferentUpdateInput, { nullable: false })
  data!: ReferentUpdateInput;
}

export { UpdateReferentArgs as UpdateReferentArgs };
