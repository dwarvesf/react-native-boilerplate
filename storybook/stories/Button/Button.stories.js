import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MyButton } from './Button'

const styles = StyleSheet.create({
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})

const MyButtonMeta = {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
  decorators: [
    (Story) => (
      <View style={styles}>
        <Story />
      </View>
    ),
  ],
}

export default MyButtonMeta

export const Basic = {}

export const AnotherExample = {
  args: {
    text: 'Another example',
  },
}
