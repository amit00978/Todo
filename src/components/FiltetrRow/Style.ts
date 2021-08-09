import { Specs, palette } from "Todo/src/theme/index"

const  CustomStyle ={
    textStyle: {
    ...Specs.fontBold,
    color: palette.darkBlack,
    fontSize: 14,
  },
    filterImage: {
    height: 13,
    marginRight: 4,
    marginTop: 3,
    width: 13,
  },
    textRightStyle: {
    fontSize: 14,
    ...Specs.fontRegular,
    color: palette.TEXT
  },

}

export default CustomStyle
