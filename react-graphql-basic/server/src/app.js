import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { graphqlHTTP } from 'express-graphql';
import { BookSchema } from './schema/bookSchema';
import  { DatabaseCon }  from './db/connectDb';




const app = express();




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





app.listen(3030, () => { 
    console.log('server running well');
  });
