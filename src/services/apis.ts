type Headers = Record<string, string>;

export class Client {
  headers: Headers = {
    'Content-Type': 'application/json',
  };

  privateHeaders: Headers = {
    ...this.headers,
  };

  baseUrl: string = 'https://animechan.vercel.app/api';

  public get formDataHeaders(): Headers {
    const cloned = Object.assign({}, this.privateHeaders);
    // Browsers will auto-set Content-Type and other things when formData is used
    // Content-Type must not be present for form data to work
    delete cloned['Content-Type'];
    return cloned;
  }

  public setAuthToken(token: string) {
    this.privateHeaders = {
      ...this.privateHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  public clearAuthToken() {
    this.privateHeaders = {...this.headers};
  }
}

const client = new Client();

export {client};
