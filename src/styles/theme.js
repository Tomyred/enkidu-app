import { Dimensions } from "react-native";
import { Platform } from "react-native";
import { scale } from "react-native-size-matters";

const windowsWidth = Dimensions.get("window").width;

const darkPalette = {
    primary: "#3399ff",
    secondary: "#9933ff",
    tertiary: "#ffff00",
    primaryText: "#14ff66",
    background: "#2c282c",
    link: "#2196F3",
    white: "#FFFFFF",
    grey: "#BFBFBF",
    lightGrey: "#E0E0E0",
    lightBlue: "#81D4FA",
    darkGrey: "#616161",
    black: "#000000",
    error: "#ff0033",
    success: "#14ff66",
};

const fontSizes = Platform.select({
    android: {
        xxbg: windowsWidth > 765 ? scale(24) : scale(26),
        xbg: windowsWidth > 765 ? scale(16) : scale(18),
        bg: windowsWidth > 765 ? scale(14) : scale(15),
        md: windowsWidth > 765 ? scale(12) : scale(13),
        sm: windowsWidth > 765 ? scale(11) : scale(12),
        xsm: windowsWidth > 765 ? scale(10) : scale(11),
        xxsm: windowsWidth > 765 ? scale(8) : scale(9),
    },
    ios: {
        xxbg: 33,
        xbg: 22,
        bg: 17,
        md: 15,
        sm: 13,
        xsm: 10,
        xxsm: 9,
    },
});

export const theme = {
    colors: darkPalette,
    fontSizes,
};

export const statusTheme = {
    barBackground: theme.colors.primary,
    barStyle: "light-content",
};
