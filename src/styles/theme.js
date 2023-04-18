import { Dimensions } from "react-native";
import { Platform } from "react-native";
import { scale } from "react-native-size-matters";

const windowsWidth = Dimensions.get("window").width;

const darkPalette = {
	primary: "#9933ff", // Morado oscuro (originalmente secundario)
	secondary: "#3399ff", // Azul oscuro (originalmente primario)
	tertiary: "#ffff00", // Amarillo brillante (original)
	primaryText: "#FFFFFF", // Blanco (original)
	background: "#130924", // Gris oscuro (original)
	link: "#2196F3", // Azul claro (original)
	white: "#FFFFFF", // Blanco (original)
	grey: "#BFBFBF", // Gris claro (original)
	lightGrey: "#E0E0E0", // Gris claro (original)
	lightBlue: "#81D4FA", // Azul claro (original)
	darkGrey: "#616161", // Gris oscuro (original)
	black: "#000000", // Negro (original)
	error: "#ff0033", // Rojo oscuro (original)
	success: "#14ff66", // Verde claro (original)
	card: "#ccddf9", // Azul claro para tarjetas
	text: "#000000", // Negro (para texto)
	icon: "#3399ff", // Azul oscuro (para íconos)
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
	barBackground: theme.colors.background,
	barStyle: "light-content",
};
