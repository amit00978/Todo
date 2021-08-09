import * as Font from "expo-font"

export const initFonts = async () => {
  await Font.loadAsync({
    HelveticaNeue: require("./HelveticaNeue.ttf"),
  })
}
