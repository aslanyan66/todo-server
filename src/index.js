import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import dotenv from 'dotenv'
import firestore from './firebase.js'
import { resolvers, typeDefs } from './graphql/index.js'

dotenv.config({ path: '.env' })

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.APP_PORT || 5000 },
  context: () => ({
    firestore,
  }),
})

console.log(`🚀  Server ready at: ${url}`)
