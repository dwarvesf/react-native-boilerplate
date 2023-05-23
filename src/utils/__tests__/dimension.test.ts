import { ScaledSize } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '@utils'

const mockDimensions = ({
  width,
  height,
}: Omit<ScaledSize, 'scale' | 'fontScale'>) => {
  jest.resetModules()
  jest.doMock('react-native/Libraries/Utilities/Dimensions', () => ({
    get: jest.fn().mockReturnValue({ width, height }),
  }))
}
describe('responsiveHeight', () => {
  beforeEach(() => mockDimensions({ width: 500, height: 800 }))

  it('should calculate the responsive height based on the window dimensions', () => {
    const result = responsiveHeight(50)

    expect(result).toEqual(400) // 800 * (50 / 100) = 400
  })
})

describe('responsiveWidth', () => {
  beforeEach(() => mockDimensions({ width: 500, height: 800 }))

  it('should calculate the responsive width based on the window dimensions', () => {
    const result = responsiveWidth(30)

    expect(result).toEqual(150) // 500 * (30 / 100) = 150
  })
})

describe('responsiveFontSize', () => {
  beforeEach(() => mockDimensions({ width: 500, height: 800 }))

  it('should calculate the responsive font size based on the window dimensions', () => {
    const result = responsiveFontSize(20)

    expect(result).toEqual(203.9728861187313) // Calculated value based on the provided fontCalculation function
  })
})
