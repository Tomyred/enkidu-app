import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";
import AuthHelper from "../hooks/AuthHelper";
import BillSplitter from "../screens/BillSplitter/BillSplitter";
import Home from "../screens/Home/Home";
import Roulette from "../screens/Roulette/Roulette";
import { theme } from "../styles/theme";

const Drawer = createDrawerNavigator();

const MenuItems = ({ navigation }) => {
    const { logout } = AuthHelper(navigation);

    const drawerNavItems = [
        {
            title: "Inicio",
            actionType: "nav",
            navTo: "Home",
        },
        {
            title: "Repartir gastos",
            actionType: "nav",
            navTo: "BillSplitter",
        },
        {
            title: "Ruleta del destino",
            actionType: "nav",
            navTo: "Roulette",
        },
        {
            title: "Cerrar sesion",
            actionType: "action",
            navTo: "",
            onPress: logout,
            itemProps: {
                textColor: "error",
            },
        },
    ];

    return (
        <DrawerContentScrollView style={{ backgroundColor: theme.colors.background }}>
            {drawerNavItems.map((item, i) => {
                return (
                    <MenuButton
                        key={i}
                        {...item.itemProps}
                        fontSize={"bg"}
                        style={styles.navItem}
                        title={item.title}
                        onPress={() => {
                            if (item.actionType === "nav") {
                                navigation.navigate(item.navTo);
                            } else {
                                item.onPress();
                            }
                        }}
                    />
                );
            })}
        </DrawerContentScrollView>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuItems {...props} />}
            screenOptions={{ headerBackgroundContainerStyle: { backgroundColor: theme.colors.background } }}
            initialRouteName='Inicio'
        >
            <Drawer.Screen name='Home' component={Home} options={{ title: "Inicio" }} />
            <Drawer.Screen name='BillSplitter' component={BillSplitter} options={{ title: "Repartir gastos" }} />
            <Drawer.Screen name='Roulette' component={Roulette} options={{ title: "Ruleta" }} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    navItem: {
        paddingLeft: 15,
        paddingVertical: 10,
    },
});

export default DrawerNavigator;
