import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Text from "./Text";

const MenuButton = ({ title, onPress, textColor, fontSize, style }) => {
    return (
        <TouchableOpacity style={{ ...style, width: "100%" }} onPress={onPress}>
            <Text value={title} textStyle={textColor} fontSize={fontSize} />
        </TouchableOpacity>
    );
};

export default MenuButton;
