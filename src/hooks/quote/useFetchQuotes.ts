import useSWRInfinite from 'swr/infinite';
import {quoteService} from '../../api';

const KEY = 'GET_QUOTES';

export function useFetchQuotes({title}: {title: string}) {
  return useSWRInfinite(
    index => [KEY, index],
    (_: any, page: any) => quoteService.getQuotesAnime({title, page}),
  );
}
