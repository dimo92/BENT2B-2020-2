import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({marca, modelo}) => {
    return (
        <View style={styles.vehiculo}>
            <Text style={styles.marca}>{marca} | {modelo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    vehiculo:{
        margin: 5
    },
    marca:{
        fontSize: 16
    }
})