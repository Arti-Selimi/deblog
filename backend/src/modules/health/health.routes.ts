import type {FastifyInstance} from "fastify"
import { healthSchema } from "./health.schema.ts"

export default async function healthRoutes(app: FastifyInstance) { return app.route(
  {
    method: "GET",
    url: "/health",
    schema: healthSchema,
    handler: function (request, reply) {
      reply.send({status: "healthy"})
    }
  }
)
}
