import Fastify from "fastify"
import routes from "./modules/health/health.routes.ts"
import registerGraphql from "./plugins/graphql.ts"

export const app = Fastify({
  logger: true
})

app.get('/', async function (request, reply) {
  reply.send({hello: "world"})
})

app.register(routes)

async function start() {
  try {
    await registerGraphql(app)
    app.listen({port: 8000})
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
