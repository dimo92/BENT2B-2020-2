import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Row = ({contacto}) => (
    <View style={styles.row}>
        <Text>{contacto.nombre}</Text>
        <Text>{contacto.telefono}</Text>
    </View>
)

const styles = StyleSheet.create({
    row: {
        padding: 20
    }
})

export default Row;