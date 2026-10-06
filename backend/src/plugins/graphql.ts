import mercurius from "mercurius"
import type { FastifyInstance } from "fastify"

const schema = `
  type Query {
    hello: String!
}
`

const resolvers = {
  Query: {
    hello: async () => {
      return "hello from deblog"
    }
  }
}

export default async function registerGraphql(app: FastifyInstance) {
  await app.register(mercurius, {
    resolvers,
    schema,
    graphiql: true
  })
}
