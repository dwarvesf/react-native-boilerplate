/**
 * Translation function return type DefaultTFuncReturn makes React Native errors
 * Error: Type 'DefaultTFuncReturn' is not assignable to type 'string | undefined'.
 */
import 'i18next'

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false
  }
}
