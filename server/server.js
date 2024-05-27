import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Interface for our API: What Clients can request from data base
const TypeDefs = `#graphql
    type Query {
        greeting: String
    }
`;

// Implementation: provides the code that returns the actual values
const resolvers = {
  Query: {
    greeting: () => "Hi Valen!",
  },
};

const server = new ApolloServer({ typeDefs: TypeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server at:, ${url}`);
