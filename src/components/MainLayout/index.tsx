import React from 'react'
import {
  View,
  ViewStyle,
  Platform,
  StyleProp,
  RefreshControl,
  ViewProps,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight } from '@utils'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { gutters, Style, Palette } from '@styles'

export interface MainLayoutProps extends React.PropsWithChildren<ViewProps> {
  children?: React.ReactNode | React.ReactNode[]
  style?: StyleProp<ViewStyle>
  header?: boolean
  canBack?: boolean
  onBack?: () => void
  headerLeft?: () => React.ReactElement
  headerRight?: () => React.ReactElement
  headerTitle?: () => React.ReactElement
  paddingX?: number
  paddingY?: number
  scrollable?: boolean
  stickyBottom?: () => React.ReactElement
  refreshing?: boolean
  onRefresh?: () => void
  bgColor?: string
}

export const MainLayout = React.memo(
  ({
    children,
    style,
    paddingX = gutters,
    paddingY,
    scrollable = false,
    stickyBottom,
    refreshing = false,
    onRefresh,
    bgColor = Palette.white,
  }: MainLayoutProps) => {
    const BodyComponent = React.useMemo(() => {
      if (scrollable) {
        return (
          <KeyboardAwareScrollView
            refreshControl={
              onRefresh ? (
                <RefreshControl
                  colors={[Palette.primary, Palette.primary]}
                  tintColor={Palette.primary}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              ) : undefined
            }
            keyboardShouldPersistTaps="handled"
            enableOnAndroid
            style={[
              Style.s({
                flex: 1,
                px: paddingX,
                py: paddingY,
              }),
            ]}
          >
            {children}
          </KeyboardAwareScrollView>
        )
      }
      return (
        <View
          style={[
            Style.s({
              flex: 1,
              px: paddingX,
              py: paddingY,
            }),
          ]}
        >
          {children}
        </View>
      )
    }, [scrollable, paddingX, paddingY, children, onRefresh, refreshing])

    return (
      <SafeAreaView
        style={[
          Style.s({
            flex: 1,
            bg: bgColor,
            pb: Platform.select({ android: responsiveHeight(1) }),
          }),
          style,
        ]}
      >
        {BodyComponent}
        {typeof stickyBottom === 'function' ? stickyBottom() : null}
      </SafeAreaView>
    )
  },
)
