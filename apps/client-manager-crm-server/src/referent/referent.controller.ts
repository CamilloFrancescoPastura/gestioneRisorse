import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReferentService } from "./referent.service";
import { ReferentControllerBase } from "./base/referent.controller.base";

@swagger.ApiTags("referents")
@common.Controller("referents")
export class ReferentController extends ReferentControllerBase {
  constructor(protected readonly service: ReferentService) {
    super(service);
  }
}
