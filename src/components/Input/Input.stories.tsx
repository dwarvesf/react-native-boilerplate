import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Input } from './index'
import { View } from 'react-native'
import { Style } from '@styles'

export default {
  title: 'components/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const inputStyle = Style.s({ mt: 20 })

export const Default: ComponentStory<typeof Input> = (args) => (
  <View>
    <Input style={inputStyle} placeholder="Email" {...args} />
    <Input
      style={inputStyle}
      secureTextEntry={true}
      placeholder="Password"
      {...args}
    />
  </View>
)
