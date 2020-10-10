import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3
    }
})

const AddContactForm = ({guardarContacto}) => {

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")

    const [puedeEnviar, setPuedeEnviar] = useState(false)

    // Validacion de boton enviar
    useEffect( () => {

        setPuedeEnviar(nombre.length > 3 && telefono.length > 9)
        
    }, [nombre, telefono])

    // const guardarContacto = () => {
    //     console.log("Aqui guardo el contacto: ", nombre, telefono)
    // }

    return (
        <View>
            <TextInput
                style={styles.input}
                value={nombre}
                placeholder="Nombre"
                onChangeText={(texto) => setNombre(texto)}
            />
            <TextInput
                style={styles.input}
                value={telefono}
                placeholder="Telefono"
                onChangeText={(texto) => setTelefono(texto)}
                keyboardType="numeric"
            />
            <Button
                title={"Guardar Contacto"}
                onPress={() => guardarContacto({nombre, telefono})}
                disabled={!puedeEnviar}

            />

        </View>
    )
}

export default AddContactForm;