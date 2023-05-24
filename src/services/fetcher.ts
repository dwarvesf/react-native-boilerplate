import fetch from 'isomorphic-unfetch'
import { API_REQUEST, emitter } from './emitter'

/**
 * Custom error class for fetcher errors.
 */
export class FetcherError extends Error {
  public statusCode: number
  public res: Response
  public body?: any

  /**
   * Create a new FetcherError instance.
   * @param message Error message
   * @param statusCode HTTP status code
   * @param origResponse Original response object
   */
  constructor(message: string, statusCode: number, origResponse: Response) {
    super(message)
    this.name = 'HttpError'
    this.statusCode = statusCode
    this.res = origResponse
  }
}

/**
 * Custom fetcher function for making API requests.
 * @param input Request URL or Request object
 * @param init Optional request configuration
 * @returns Promise that resolves to JSON data
 */
export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  try {
    const res = await fetch(input, init)
    if (res.ok) {
      return await res.json()
    }

    emitter.emit(API_REQUEST, res)

    const error = new FetcherError(res.statusText, res.status, res)

    const isResponseJson = res.headers
      .get('content-type')
      ?.includes('application/json')

    if (isResponseJson) {
      let data

      try {
        data = (await res.json()) as any
        error.body = data
        error.message = data?.message || data?.data?.message
      } catch (err: any) {
        error.message = err.message
      }
    }
    return await Promise.reject(error)
  } catch (error: any) {
    return await Promise.reject(error)
  }
}
