import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  baseMargin: 10,
  basePadding: 10,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  fontSizeUp: 12,
  fontSizeDown: 10,
  headerHeight: 120,

  inputSizeBig: 45
};
