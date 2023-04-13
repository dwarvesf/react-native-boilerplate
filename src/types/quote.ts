export type Quote = {
  anime: string;
  character: string;
  quote: string;
};

export interface GetQuotesAnimeRequest {
  title: string;
  page: number;
}
