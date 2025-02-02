/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Client } from "./Client";
import { ClientCountArgs } from "./ClientCountArgs";
import { ClientFindManyArgs } from "./ClientFindManyArgs";
import { ClientFindUniqueArgs } from "./ClientFindUniqueArgs";
import { CreateClientArgs } from "./CreateClientArgs";
import { UpdateClientArgs } from "./UpdateClientArgs";
import { DeleteClientArgs } from "./DeleteClientArgs";
import { ProjectFindManyArgs } from "../../project/base/ProjectFindManyArgs";
import { Project } from "../../project/base/Project";
import { ClientService } from "../client.service";
@graphql.Resolver(() => Client)
export class ClientResolverBase {
  constructor(protected readonly service: ClientService) {}

  async _clientsMeta(
    @graphql.Args() args: ClientCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Client])
  async clients(@graphql.Args() args: ClientFindManyArgs): Promise<Client[]> {
    return this.service.clients(args);
  }

  @graphql.Query(() => Client, { nullable: true })
  async client(
    @graphql.Args() args: ClientFindUniqueArgs
  ): Promise<Client | null> {
    const result = await this.service.client(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Client)
  async createClient(@graphql.Args() args: CreateClientArgs): Promise<Client> {
    return await this.service.createClient({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Client)
  async updateClient(
    @graphql.Args() args: UpdateClientArgs
  ): Promise<Client | null> {
    try {
      return await this.service.updateClient({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Client)
  async deleteClient(
    @graphql.Args() args: DeleteClientArgs
  ): Promise<Client | null> {
    try {
      return await this.service.deleteClient(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Project], { name: "projects" })
  async findProjects(
    @graphql.Parent() parent: Client,
    @graphql.Args() args: ProjectFindManyArgs
  ): Promise<Project[]> {
    const results = await this.service.findProjects(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
