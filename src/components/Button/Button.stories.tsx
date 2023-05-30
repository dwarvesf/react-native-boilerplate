import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { View } from 'react-native'

import { Button } from './index'
import { Style } from '@styles'

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const buttonStyle = Style.s({ mt: 20 })

export const Default: ComponentStory<typeof Button> = (args) => (
  <View style={Style.s({ w: 300, flex: 1 })}>
    <Button style={buttonStyle} title="Primary Button" primary {...args} />
    <Button style={buttonStyle} title="Secondary Button" secondary {...args} />
  </View>
)
