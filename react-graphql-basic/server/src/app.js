import express from 'express';
import Morgan from 'morgan'
import { graphqlHTTP} from 'express-graphql';
import { schema,root } from './schema/mySchema';
const app = express();
app.use(Morgan('dev'));
app.use('/graphql', graphqlHTTP((request) => {
  return {
    schema: schema,
    rootValue: root,
    graphiql: true,
  };
}));
app.listen(4000, () => {
  console.log('server running well');
});
