import Config from 'react-native-config'

type Headers = Record<string, string>

/**
 * HTTP client class for managing headers and base URL.
 */
export class Client {
  headers: Headers = {
    'Content-Type': 'application/json',
  }

  privateHeaders: Headers = {
    ...this.headers,
  }

  // Get base URL from .env or fallback to an empty string
  baseUrl: string = Config?.BASE_URL ?? ''

  // Get headers for form data.
  public get formDataHeaders(): Headers {
    const cloned = Object.assign({}, this.privateHeaders)
    // Browsers will auto-set Content-Type and other things when formData is used
    // Content-Type must not be present for form data to work
    delete cloned['Content-Type']
    return cloned
  }

  public setAuthToken(token: string) {
    this.privateHeaders = {
      ...this.privateHeaders,
      Authorization: `Bearer ${token}`,
    }
  }

  public clearAuthToken() {
    this.privateHeaders = { ...this.headers }
  }
}

const client = new Client()

export { client }
