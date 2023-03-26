import { SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserProvider";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { LOGIN_SUCCEED } from "../../../context/UserContext/types";
import { setItem } from "../../../utils/helpers/StorageHelper";
import { USER } from "../../../constants/storage";
import { theme } from "../../../styles/theme";

const Login = ({ navigation }) => {
    const [loginInfo, setLoginInfo] = useState({ user: "", password: "" });
    const { dispatch } = useContext(UserContext);

    const doLogin = async () => {
        const user = {
            name: "John",
            surname: "Doe",
            age: 20,
        };

        if (loginInfo.user === "JohnDoe" && loginInfo.password === "123456") {
            console.log(true);
            1;
            await setItem(USER, user);
            dispatch({
                type: LOGIN_SUCCEED,
                payload: {
                    name: "John",
                    surname: "Doe",
                    age: 20,
                },
            });
            navigation.reset({
                index: 0,
                routes: [{ name: "Drawer" }],
            });
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 30, backgroundColor: theme.colors.background }}>
            <Input textSize={"xbg"} value={loginInfo.user} placeholder={"Usuario"} onChangeText={(value) => setLoginInfo({ ...loginInfo, user: value })} />
            <Input
                secure
                textSize={"xbg"}
                value={loginInfo.password}
                placeholder={"Contraseña"}
                onChangeText={(value) => setLoginInfo({ ...loginInfo, password: value })}
            />
            <Button
                color='primary'
                disabled={loginInfo.user.length === 0 || loginInfo.password.length === 0}
                onPress={doLogin}
                title='Ingresar'
                backgroundColor={"error"}
            />
        </SafeAreaView>
    );
};

export default Login;
