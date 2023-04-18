import AsyncStorage from "@react-native-async-storage/async-storage";
import * as STORAGE_KEYS from "../../constants/storage";

export async function getUserInfo() {
	const userString = await AsyncStorage.getItem(STORAGE_KEYS.USER);
	const userInfo = JSON.parse(userString);
	return userInfo;
}

export const setItem = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(value));
	} catch (e) {
		console.log(e);
	}
};

export const getItem = async (key) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		console.log(e);
	}
};

export const clearStorage = async () => {
	try {
		Object.values(STORAGE_KEYS).map(async (key) => {
			await AsyncStorage.removeItem(key);
		});
	} catch (e) {
		console.log(e);
	}
};
