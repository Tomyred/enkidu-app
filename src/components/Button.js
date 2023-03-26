import React from "react";
import { View, StyleSheet } from "react-native";
import { Button as ElementButton, withTheme } from "@rneui/themed";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { color, fontSize } from "../utils/utils";

function styles(props) {
    return StyleSheet.create({
        buttonStyle: {
            backgroundColor: props.type === "outline" ? null : color(props.color),
            borderRadius: Platform.select({ android: 15, ios: 5 }),
            height: Platform.select({ android: hp(8), ios: props.outlined ? 40 : 50 }),
            borderColor: props.type === "outline" ? (props.borderColor ? color(props.borderColor) : color(props.color)) : color(props.color),
            borderWidth: 2,
            ...props.style,
        },
        titleStyle: {
            color: props.textColor ? color(props.textColor) : props.type === "outline" ? color(props.color) : props.theme.colors.white,
            // fontFamily: props.theme.fontFamilys.primary,
            fontSize: fontSize(props.fontSize),
            ...props.textStyle,
        },
    });
}

const Button = (props) => {
    const { buttonStyle, titleStyle } = styles(props);

    return <ElementButton style={{ borderWidth: 50 }} type={props.type} {...props} titleStyle={titleStyle} buttonStyle={buttonStyle} />;
};

export default withTheme(Button);
