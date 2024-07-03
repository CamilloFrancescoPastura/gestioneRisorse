import { Module } from "@nestjs/common";
import { ReferentModuleBase } from "./base/referent.module.base";
import { ReferentService } from "./referent.service";
import { ReferentController } from "./referent.controller";
import { ReferentResolver } from "./referent.resolver";

@Module({
  imports: [ReferentModuleBase],
  controllers: [ReferentController],
  providers: [ReferentService, ReferentResolver],
  exports: [ReferentService],
})
export class ReferentModule {}
