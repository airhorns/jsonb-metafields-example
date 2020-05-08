import { GraphQLJSON } from 'graphql-type-json'

export const schema = gql`
  scalar Json

  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    metafields: Json!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post!
  }

  input CreatePostInput {
    title: String!
    body: String!
    metafields: Json
  }

  input UpdatePostInput {
    title: String
    body: String
    metafields: Json
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`

export const resolvers = {
  Json: GraphQLJSON,
}
