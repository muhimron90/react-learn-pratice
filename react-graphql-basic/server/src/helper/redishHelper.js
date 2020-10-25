/* import { createClient } from 'redis';

 
  //  const client = createClient({
  //    host: process.env.REDIS_HOST,
  //    port: process.env.REDIS_PORT,
  //    retry_strategy: retryRedis,
  //  });

  async function disconnect() {
    await new Promise((resolve) => {
      client.quit(() => {
        resolve();
      });
    });
    // redis.quit() creates a thread to close the connection.
    // We wait until all threads have been run once to ensure the connection closes.
    await new Promise((resolve) => setImmediate(resolve));
  }

  const retryRedis = (opt) => {
    if (opt.error && opt.error.code === 'ECONNREFUSED') {
      //Connection refused or redisserver not running
      console.log('The server refused the connection');
    }
    if (opt.total_retry_time > 1000 * 60) {
      //1000 * 60 * 60 == 1hours so 1000 * 60 = 1 minute default

      console.log('Timeout');
      client.end(true);
    }
    if (opt.attempt > 5) {
      //end reconnecting

      console.log('Max attempts reached');

      disconnect();
    }

    return opt.attempt + 1;
  };



    



export default client; */