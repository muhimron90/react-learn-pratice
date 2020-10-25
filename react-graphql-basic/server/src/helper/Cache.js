import { promisify } from 'util';
import { Caching } from './Caching';
const GET_CACHE = promisify(Caching.get).bind(Caching);
const SET_CACHE = promisify(Caching.set).bind(Caching);

export { GET_CACHE, SET_CACHE };