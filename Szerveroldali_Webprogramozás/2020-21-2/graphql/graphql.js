const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

let number = 5;

const typeDefs = `
  type Query {
    hello(name: String): String
    getNumber: Int
  }

  type Mutation {
    setNumber(n: Int): Int
  }
`;

const resolvers = {
  Query: {
    hello: (parent, { name }) => `Hello ${name}`,
    getNumber: () => number,
  },
  Mutation: {
    setNumber: (parent, { n }) => {
      number = n;
      return number;
    }
  }
};

module.exports = graphqlHTTP({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  graphiql: true
});