import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReferentServiceBase } from "./base/referent.service.base";

@Injectable()
export class ReferentService extends ReferentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
