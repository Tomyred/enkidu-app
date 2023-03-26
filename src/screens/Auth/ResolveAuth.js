import { useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserProvider";
import { PUSH_USER_INFO } from "../../context/UserContext/types";
import { getUserInfo } from "../../utils/helpers/StorageHelper";

const ResolveAuthScreen = props => {
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        getUserInfo().then(user => {
            if (user) {
                dispatch({ type: PUSH_USER_INFO, payload: user });
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: "Drawer" }],
                });
            } else {
                props.navigation.reset({
                    index: 0,
                    routes: [{ name: "Auth" }],
                });
            }
        });
    }, []);

    return null;
};

export default ResolveAuthScreen;
