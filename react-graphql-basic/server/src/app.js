import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { BookSchema } from './schema/bookSchema';
import  { DatabaseCon }  from './db/connectDb';




const app = express();
const PORT = process.env.PORT || 4000;



app.use(morgan('dev'));
app.use(cors());
DatabaseCon();

app.use(
  '/gqli',
  graphqlHTTP((request) => {
    return {
      schema: BookSchema,
      graphiql: true,
      pretty :true,
    };
  })
);





app.listen(PORT, () => {
  console.log('server running well on', PORT);
});
