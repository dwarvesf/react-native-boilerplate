import React from 'react'
import { Style, Palette } from '@styles'
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox'

export interface CheckboxProps extends IBouncyCheckboxProps {}

export const Checkbox = React.memo(({ ...rest }: CheckboxProps) => {
  return (
    <BouncyCheckbox
      size={20}
      fillColor={Palette.gray[200]}
      unfillColor="#FFFFFF"
      disableText
      iconStyle={Style.b({ color: Palette.gray[200], bor: 4, width: 1 })}
      innerIconStyle={Style.b({ width: 2, bor: 4 })}
      {...rest}
    />
  )
})
