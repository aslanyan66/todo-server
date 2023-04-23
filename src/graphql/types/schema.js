const typeDefs = `#graphql

type Todo {
    id: ID!
    title: String!
    isCompleted: Boolean!
}


type Query {
    todos: [Todo!]!
    todo(id: ID!): Todo
}

type Mutation {
    createTodo(title: String!, isCompleted: Boolean!): Todo!
    updateTodo(id: ID!, title: String, completed: Boolean): Todo!
    deleteTodo(id: ID!): ID
}
`

export default typeDefs
