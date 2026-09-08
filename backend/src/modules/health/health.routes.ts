import {fastify} from "../../server.ts"
import {healthSchema} from "./health.schema.ts"

fastify.route(
  {
    method: "GET",
    url: "/health",
    schema: healthSchema,
    handler: function (request, reply) {
      reply.send({status: "healthy"})
    }
  }
)

