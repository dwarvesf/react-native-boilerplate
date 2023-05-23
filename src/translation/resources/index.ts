import common_en from './common_vi'
import common_vi from './common_vi'

import navigators_en from './navigators_en'
import navigators_vi from './navigators_vi'

import request_en from './request_en'
import request_vi from './request_vi'

import validation_en from './validation_en'
import validation_vi from './validation_vi'

const en = {
  ...common_en,
  navigators: navigators_en,
  http_responses: request_en,
  validation: validation_en,
}

const vi = {
  ...common_vi,
  navigators: navigators_vi,
  http_responses: request_vi,
  validation: validation_vi,
}

export { vi, en }
