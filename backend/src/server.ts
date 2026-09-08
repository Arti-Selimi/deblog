import Fastify, { type FastifyInstance } from "fastify"
import routes from "./modules/health/health.routes.ts"

export const fastify = Fastify({
  logger: true
})

fastify.get('/', async function (request, reply) {
  reply.send({hello: "world"})
})

fastify.register(routes)

async function start() {
  try {
    fastify.listen({port: 8000})
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
