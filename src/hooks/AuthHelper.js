import React from "react";
import { clearStorage } from "../utils/helpers/StorageHelper";

const AuthHelper = (navigation) => {
    const logout = async () => {
        await clearStorage();

        navigation.reset({
            index: 0,
            routes: [{ name: "Auth" }],
        });
    };

    return { logout };
};

export default AuthHelper;
