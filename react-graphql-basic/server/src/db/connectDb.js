import mongoose from 'mongoose';


 function DatabaseCon () {
 try { 
     mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@react-gql-basic.meawg.mongodb.net/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false,
        poolSize: 10,
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 35000, // Close sockets after 35 seconds of inactivity
      }
    );
     mongoose.connection.on('error', (error) => {
      console.log(error);
    });
    mongoose.connection.once('open', () => {
      console.log('database Connected');
    });
   } 
  catch (error) {
   
    console.error(error);
    mongoose.connection.close();
  } 
  
}



export { DatabaseCon };


