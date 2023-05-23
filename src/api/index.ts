import { quoteService } from './example-api'

const authRequiredList = [quoteService]

const services = {
  setAuthToken: (token: string) => {
    authRequiredList.forEach((service) => service.setAuthToken(token))
  },
  clearAuthToken: () => {
    authRequiredList.forEach((service) => service.clearAuthToken())
  },
}

export { services, quoteService }
