declare module '*.jpg'
declare module '*.png'
declare module '*.json'
declare module '*.gif'
declare module '*.jpeg'

declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
