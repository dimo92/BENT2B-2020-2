import React, {useEffect} from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import Row from "./Row";

const renderItem = ({item}) => ( <Row contacto={item} />)
const renderSectionHeader = ({section}) => (
    <View style={styles.header}>
        <Text style={styles.textHeader}>{section.title}</Text>
    </View>
)

const SectionListContact = ({ contactos }) => {



    const contactByLetter = contactos.reduce((obj, contact) => {

        const primeraLetra = contact.nombre[0];

        // console.log(">>>>>>>> Objeto Actual", obj);
        // console.log("Contacto actual", contact);
        // Este metodo retorna el objeto principal concatenado con el attribute key del objeto resultando:
        // ejemplo: {F: [{}], T: [{}]
        return{
            ...obj,
            [primeraLetra]: [...(obj[primeraLetra] || []), contact]
        }
    }, {})

            

    // console.log(contactByLetter);

    // console.log(Object.keys(contactByLetter).sort())

    const sections = Object.keys(contactByLetter).sort().map(letter => ({
        title: letter,
        data: contactByLetter[letter]
    }))

    // console.log("Data agrupada", sections)

    // const sections = [
    //     {
    //         title: "F",
    //         data: [
    //             { "nombre": "Fernando Bellanti", "telefono": "12123213" },
    //             { "nombre": "Fernando Sosa", "telefono": "12123213" },
    //         ]
    //     },
    //     {
    //         title: "R",
    //         data: [
    //             {"nombre": "Rodrigo DosNasimiento", "telefono": "12123213"},
    //             {"nombre": "Ross Sbaraglia", "telefono": "12123213"},
    //         ]
    //     }
    // ]

    return (
        <SectionList
            sections={sections}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={item => item.key.toString()}
        />
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "blue"
    },
    textHeader: {
        fontSize: 28
    }
})

export default SectionListContact;