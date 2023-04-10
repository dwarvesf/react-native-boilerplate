import {Client} from '../services/apis';
import fetcher from '../services/fetcher';
import {BaseResponse} from '../types';

class QuoteService extends Client {
  public getQuoteRandom() {
    return fetcher<BaseResponse<any[]>>(`${this.baseUrl}/random`, {
      headers: this.privateHeaders,
      method: 'GET',
    });
  }
}

const quoteService = new QuoteService();

export {quoteService};
