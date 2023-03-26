import React from "react";
import List from "../../components/List";
import AuthHelper from "../../hooks/AuthHelper";

const AccountMenu = ({ navigation }) => {
    const { logout } = AuthHelper(navigation);

    const items = [{ label: "Cerrar sesión", onPress: logout }];

    return <List items={items} pressable />;
};

export default AccountMenu;
