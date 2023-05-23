import qs from 'query-string'
import { fetcher, Client } from '@services'
import { GetQuotesAnimeRequest, Quote } from '@types'

class QuoteService extends Client {
  public getQuoteRandom() {
    return fetcher<Quote>(`${this.baseUrl}/random`, {
      headers: this.privateHeaders,
      method: 'GET',
    })
  }

  public getQuotesAnime(request: GetQuotesAnimeRequest) {
    return fetcher<Quote[]>(
      `${this.baseUrl}/quotes/anime?${qs.stringify(request)}`,
      {
        headers: this.privateHeaders,
        method: 'GET',
      },
    )
  }
}

const quoteService = new QuoteService()

export { quoteService }
