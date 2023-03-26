import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import Text from "./Text";
import { TouchableOpacity } from "react-native-gesture-handler";

const List = ({ items, pressable }) => {
    if (pressable) {
        return (
            <SafeAreaView style={styles.table}>
                {items.map((item, i) => {
                    return (
                        <TouchableOpacity key={i} style={styles.tableRow} onPress={item.onPress}>
                            <Text value={item.label} />
                        </TouchableOpacity>
                    );
                })}
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.table}>
            {items.map((item, i) => {
                return (
                    <View key={i} style={styles.tableRow}>
                        <Text value={item.label} />
                    </View>
                );
            })}
        </SafeAreaView>
    );
};

export default List;

const styles = StyleSheet.create({
    table: {
        flex: 1,
        padding: 5,
    },
    tableRow: {
        flexDirection: "row",
        padding: 8,
        backgroundColor: "black",
    },
});
