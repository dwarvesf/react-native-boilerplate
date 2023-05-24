import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Style, Fonts, Palette } from '@styles'

export interface ButtonProps extends TouchableOpacityProps {
  title?: string
  primary?: boolean
  secondary?: boolean
}

export const getButtonStyle = (primary?: boolean, secondary?: boolean) => {
  if (primary) {
    return Style.s({ bg: Palette.primary })
  }
  if (secondary) {
    return [
      Style.s({ bg: Palette.white }),
      Style.b({ bor: 6, color: Palette.gray[200], width: 1 }),
    ]
  }
}

export const getButtonTitleStyle = (primary?: boolean, secondary?: boolean) => {
  if (primary) {
    return Fonts.t({ c: Palette.white, s: 14, w: '500' })
  }
  if (secondary) {
    return [Fonts.t({ c: Palette.gray[300], s: 14, w: '500' })]
  }
}

export const Button = React.memo(
  ({ title, primary, secondary, ...rest }: ButtonProps) => {
    return (
      <TouchableOpacity
        style={[
          Style.s({ cen: true, minH: 48, bor: 6 }),
          getButtonStyle(primary, secondary),
        ]}
        {...rest}
      >
        <Text
          style={[
            Fonts.t({ s: 14, c: Palette.white, w: '500' }),
            getButtonTitleStyle(primary, secondary),
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    )
  },
)
