import { createClient } from 'redis';

const Caching = createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: retryRedis,
});
const retryRedis = (opt) => {
    if (opt.total_retry_time > 1000 * 60 * 60) {
      return new Error('Retry time exhausted');
    }
    if (opt.attempt > 10) {
      console.log('Max attempts reached');
       return undefined;
  }
  if (opt.error && opt.error.code === 'ECONNREFUSED') {
    console.log('The server refused the connection');
  }

    return Math.min(opt.attempt * 100, 5000); //delay 5seconds
  };
 
Caching.on('error', (err) => {
  console.log(err.message);
});

Caching.on('connect', () => {
  console.log('Connected to Redis');
});


export { Caching };