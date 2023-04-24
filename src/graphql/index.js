import { PubSub } from 'graphql-subscriptions'

export { default as resolvers } from './resolvers.js'
export { default as typeDefs } from './schema.js'

export const pubsub = new PubSub()
