import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Platform } from "react-native";
import Login from "../screens/Auth/Login/Login";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    actionIcon: {
        marginRight: 10,
    },
});

function AuthNavigator() {
    const navigationLogoOpts = {
        headerStyle: {
            height: Platform.select({
                ios: 124,
                android: hp(12),
            }),
        },
        headerTransparent: false,
        title: "",
        headerTitleAlign: "center",
        cardStyle: Platform.select({ android: { backgroundColor: "#FFFFFF" }, ios: { backgroundColor: "#F4F4F4" } }),
        gestureEnabled: false,
    };

    return (
        <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
