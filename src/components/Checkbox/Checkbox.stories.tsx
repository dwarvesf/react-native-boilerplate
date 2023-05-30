import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { Checkbox } from './index'
import { Fonts, Style } from '@styles'

export default {
  title: 'components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox
    text="Checkbox"
    textStyle={Fonts.t({ s: 10 })}
    textContainerStyle={Style.s({ ml: 10 })}
    {...args}
  />
)
