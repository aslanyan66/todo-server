const typeDefs = `#graphql

type Todo {
    id: ID!
    title: String!
    isCompleted: Boolean!
    action: String!
}


type Query {
    todos: [Todo!]!
    todo(id: ID!): Todo
}

type Mutation {
    createTodo(title: String!, isCompleted: Boolean!): Todo!
    updateTodo(id: ID!, title: String, isCompleted: Boolean, action: String!): Todo!
    deleteTodo(id: ID!): ID
}

type Subscription { 
    todoAdded: Todo
}
`

export default typeDefs
