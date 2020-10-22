import express from 'express';
import morgan  from 'morgan'
import { graphqlHTTP} from 'express-graphql';
import { BookSchema } from './schema/bookSchema';
const app = express();
app.use(morgan ('dev'));
app.use('/gql', graphqlHTTP((request) => {
  return {
    schema: BookSchema,
    
    graphiql: true,
  };
}));
app.listen(4000, () => {
  console.log('server running well');
});
