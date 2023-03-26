import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AuthNavigator from "./AuthNavigator";
import ResolveAuth from "../screens/Auth/ResolveAuth";
import Balance from "../screens/BillSplitter/Balance";

const Stack = createStackNavigator();

function AppNavigation() {
    const routeNameRef = React.useRef();
    return (
        <NavigationContainer
        // ref={navigationRef}
        // onReady={() => (routeNameRef.current = navigationRef.current.getCurrentRoute().name)}
        // onStateChange={() => {
        //     const previousRouteName = routeNameRef.current;
        //     const currentRouteName = navigationRef.current.getCurrentRoute().name;

        //     routeNameRef.current = currentRouteName;
        // }}
        >
            <Stack.Navigator initialRouteName={"ResolveAuth"} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ResolveAuth" component={ResolveAuth} />
                <Stack.Screen name="Auth" component={AuthNavigator} />
                <Stack.Screen name="Drawer" component={DrawerNavigator} />
                <Stack.Screen name="Balance" component={Balance} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
