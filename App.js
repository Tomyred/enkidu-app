import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-view";
import UserProvider from "./src/context/UserContext/UserProvider";
import AppNavigation from "./src/navigation/AppNavigator";
import { statusTheme, theme } from "./src/styles/theme";

export default function App() {
    return (
        <SafeAreaProvider>
            <UserProvider>
                <StatusBar backgroundColor={statusTheme.barBackground} barStyle={statusTheme.barStyle} />
                <AppNavigation />
            </UserProvider>
        </SafeAreaProvider>
    );
}
