import {Platform} from 'react-native'
const FontFamily = 'HelveticaNeue-Light'

export const Specs = {
  fontRegular: {
    fontFamily: FontFamily,
    fontWeight: '400',
  },

  fontMedium: {
    fontFamily: FontFamily,
    fontWeight: Platform.OS == "android" ? "700" : '500',
  },

  fontSemibold: {
    fontFamily: FontFamily,
    fontWeight:Platform.OS == "android" ? "700" :'600',
  },

  fontBold: {
    fontFamily: FontFamily,
    fontWeight: '700'
  }
}
