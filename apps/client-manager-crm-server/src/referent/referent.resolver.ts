import * as graphql from "@nestjs/graphql";
import { ReferentResolverBase } from "./base/referent.resolver.base";
import { Referent } from "./base/Referent";
import { ReferentService } from "./referent.service";

@graphql.Resolver(() => Referent)
export class ReferentResolver extends ReferentResolverBase {
  constructor(protected readonly service: ReferentService) {
    super(service);
  }
}
