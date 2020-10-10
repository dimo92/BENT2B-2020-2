import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScrollViewContact from "./components/ScrollViewContact";
import FlatListContact from "./components/FlatListContact";
import SectionListContact from "./components/SectionListContact";
import AddContactForm from "./components/AddContactForm";

import Constants from "expo-constants";

import contactos from "./contacts";

export default function App() {

  const [contacts, setContacts] = useState(contactos)

  const [mostrarFormulario, setFlag] = useState(true);

  const guardarContacto = ({nombre, telefono}) => {
    console.log(nombre, telefono)
    setContacts([...contacts, {
      nombre, telefono, key: contacts.length
    }])

    setFlag(false)

  }

  return (


    <View style={styles.container}>

      {
        (mostrarFormulario) ?
          
          <AddContactForm guardarContacto={guardarContacto} />

          :
          <View>
            <View>
              <Text styles>Listado de contactos</Text>
            </View>

            {/* <ScrollViewContact contactos={contactos} /> */}

            <FlatListContact contactos={contacts} />

            {/* <SectionListContact contactos={contactos} /> */}
          </View>

      }




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  row: {
    padding: 15
  }
});
