import {useFetchWithCache} from '../useFetchWithCache';
import {quoteService} from '@api';

const KEY = 'GET_QUOTE_RANDOM';

export const useFetchQuoteRandom = () => {
  return useFetchWithCache([KEY], () => quoteService.getQuoteRandom());
};
