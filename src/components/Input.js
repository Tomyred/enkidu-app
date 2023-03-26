import React, { useState, createRef, useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Input as ElementInput, withTheme } from "@rneui/themed";
import { scale } from "react-native-size-matters";
import { color, fontSize, windowsWidthAppSize } from "../utils/utils";

const Input = props => {
    const [showPassword, setShowPassword] = useState(false);
    const { placeholder, icon, theme, iconDirection, secure } = props;
    const input = createRef();
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            marginTop: 10,
        },
        inputStyle: {
            // fontFamily: theme.fontFamily.primary,
            fontSize: fontSize(props.textSize),
            marginBottom: Platform.select({ android: windowsWidthAppSize(scale(10), scale(10), 0) }),
            marginTop: Platform.select({ android: windowsWidthAppSize(scale(5), scale(5), 0) }),
            textAlign: props.textAlign,
            color: color("primaryText"),
        },
        lefIcon: {
            marginRight: wp(3),
            marginBottom: Platform.select({ android: windowsWidthAppSize(scale(10), scale(10), 0) }),
            marginTop: Platform.select({ android: windowsWidthAppSize(scale(5), scale(5), 0) }),
        },
        rightIcon: {
            marginLeft: wp(3),
        },
        eyeIcon: {
            marginRight: wp(2),
        },
    });

    useEffect(() => {
        if (props.focus) input.current.focus();
    }, []);

    function getView() {
        if (secure) {
            return (
                <ElementInput
                    {...props}
                    ref={input}
                    maxFontSizeMultiplier={1.2}
                    secureTextEntry={!showPassword}
                    inputStyle={styles.inputStyle}
                    labelStyle={{}}
                    placeholder={placeholder}
                    leftIcon={icon ? <Feather style={styles.lefIcon} color={theme.colors.grey} name={icon} size={fontSize("bg")} /> : null}
                    rightIcon={
                        <FontAwesome5
                            style={styles.eyeIcon}
                            color={theme.colors.grey}
                            name={showPassword ? "eye-slash" : "eye"}
                            size={fontSize("xbg")}
                            onPress={() => {
                                setShowPassword(!showPassword);
                            }}
                        />
                    }
                />
            );
        } else if (iconDirection === "right") {
            return (
                <ElementInput
                    {...props}
                    maxFontSizeMultiplier={1.2}
                    ref={input}
                    inputStyle={styles.inputStyle}
                    placeholder={placeholder}
                    rightIcon={
                        icon ? (
                            <FontAwesome5
                                solid
                                style={styles.eyeIcon}
                                color={color("darkGrey")}
                                name={icon}
                                size={props.iconSize ? props.iconSize : fontSize("xbg")}
                            />
                        ) : null
                    }
                />
            );
        }

        return (
            <ElementInput
                {...props}
                maxFontSizeMultiplier={1.2}
                ref={input}
                inputStyle={styles.inputStyle}
                placeholder={placeholder}
                leftIcon={icon ? <FontAwesome5 solid style={styles.lefIcon} color={theme.colors.grey} name={icon} size={fontSize("bg")} /> : null}
            />
        );
    }

    return (
        <View style={styles.container} pointerEvents={props.pointerEvents}>
            {getView()}
        </View>
    );
};

export default withTheme(Input);
