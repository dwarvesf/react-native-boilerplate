import React from 'react'
import { Style, Palette, Fonts } from '@styles'
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox'
import { responsiveWidth } from '@utils'

export interface CheckboxProps extends IBouncyCheckboxProps {}

export const Checkbox = React.memo(
  ({ textStyle, textContainerStyle, ...rest }: CheckboxProps) => {
    return (
      <BouncyCheckbox
        size={20}
        fillColor={Palette.gray[300]}
        unfillColor={Palette.white}
        iconStyle={Style.b({ color: Palette.gray[300], bor: 4, width: 1 })}
        innerIconStyle={Style.b({ width: 2, bor: 4 })}
        textStyle={[
          Fonts.t({
            s: 14,
            w: '500',
            c: Palette.gray[300],
            dec: 'none',
          }),
          textStyle,
        ]}
        textContainerStyle={[
          Style.s({ ml: responsiveWidth(2) }),
          textContainerStyle,
        ]}
        {...rest}
      />
    )
  },
)
