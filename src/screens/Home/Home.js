import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import Text from "../../components/Text";
import { theme } from "../../styles/theme";
import { UserContext } from "../../context/UserContext/UserProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { color } from "../../utils/utils";

const InProgressEvent = ({ eventsCount, navigate }) => {
	//todo: agregar flecha a la derecha del badge y el icono con el simbolo + en el boton de iniciar otro evento

	return (
		<View style={styles.inProgressContainer}>
			<View style={styles.statusContainer}>
				<View style={{ width: "85%" }}>
					<Text fontSize="xbg" value={eventsCount > 1 ? "¡Tenes eventos en curso!" : "¡Hay un evento en curso!"} />
					<Text style={{ marginTop: 10 }} value={eventsCount > 1 ? "Revisa sus estados y detalles" : "Revisa su estado y detalle"} />
				</View>
				<View
					style={{
						width: "15%",
						height: "100%",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<View style={styles.badge}>
						<Text value={eventsCount} />
					</View>
					<FontAwesome5 style={{ height: "100%", width: "40%" }} name={"chevron-right"} color={color("lightGrey")} size={60} />
				</View>
			</View>
			<TouchableOpacity onPress={() => navigate("")} activeOpacity={0.75} style={styles.newEventButton}>
				<Text value={"Organizar otro evento"} />
				<FontAwesome5 name={"plus-circle"} color={color("link")} />
			</TouchableOpacity>
		</View>
	);
};

const NoEventsInProgress = () => {
	return (
		<View style={styles.noEventsContainer}>
			<Text value={"No tenes eventos en curso. ¡Organizá uno!"} />
		</View>
	);
};

const Home = ({ navigate }) => {
	const [eventsCount, setEventsCount] = useState(1);
	const {
		state: { userInfo },
	} = useContext(UserContext);

	return (
		<SafeAreaView style={styles.homeContainer}>
			<Text fontSize="xxbg" style={styles.welcome} value={`Hola, ${userInfo.name} `} />
			{eventsCount > 0 ? (
				<InProgressEvent eventsCount={eventsCount} setEventsCount={setEventsCount} navigate={navigate} />
			) : (
				<NoEventsInProgress />
			)}
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	homeContainer: {
		backgroundColor: theme.colors.background,
		flex: 1,
		paddingHorizontal: 20,
	},
	welcome: {
		paddingVertical: 40,
	},
	inProgressContainer: {
		width: "100%",
	},
	statusContainer: {
		padding: 20,
		width: "100%",
		borderRadius: 20,
		backgroundColor: theme.colors.primary,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	newEventButton: {
		padding: 20,
		width: "100%",
		borderRadius: 20,
		borderColor: theme.colors.white,
		borderWidth: 1,
		marginTop: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	badge: {
		backgroundColor: theme.colors.link,
		padding: 5,
		height: 32,
		borderRadius: 500,
		width: "60%",
		alignItems: "center",
		justifyContent: "center",
	},
	noEventsContainer: {
		borderColor: theme.colors.primaryText,
		borderWidth: 1,
		borderRadius: 20,
	},
});
