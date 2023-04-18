import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import ResolveAuth from "../screens/Auth/ResolveAuth";
import BillSplitter from "../screens/BillSplitter/BillSplitter";
import Balance from "../screens/BillSplitter/Balance";
import Home from "../screens/Home/Home";
import { theme } from "../styles/theme";

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
			<Stack.Navigator
				initialRouteName={"ResolveAuth"}
				screenOptions={{
					headerShown: false,
					headerStyle: {
						backgroundColor: theme.colors.primary,
					},
					headerTitleStyle: {
						color: theme.colors.primaryText,
					},
				}}
			>
				<Stack.Screen name="ResolveAuth" component={ResolveAuth} />
				<Stack.Screen name="Auth" component={AuthNavigator} />
				<Stack.Screen name="Home" component={Home} options={{ title: "Inicio" }} />
				<Stack.Screen name="BillSplitter" component={BillSplitter} options={{ title: "Repartir gastos" }} />
				<Stack.Screen name="Balance" component={Balance} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigation;
