import React from 'react'
import { View, TextInput, TextInputProps } from 'react-native'
import { Style, Palette } from '@styles'

export interface InputProps extends TextInputProps {}

export const Input = React.memo(({ ...rest }: InputProps) => {
  return (
    <View>
      <TextInput
        style={[
          Style.b({ width: 1, color: Palette.gray[200], bor: 8 }),
          Style.s({ px: 13, py: 12, minH: 44 }),
        ]}
        placeholder={Palette.placeholder.text[100]}
        {...rest}
      />
    </View>
  )
})
