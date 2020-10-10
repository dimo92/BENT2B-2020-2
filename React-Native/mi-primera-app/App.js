import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import  Constants  from "expo-constants";

import Vehiculo from "./components/vehiculo";

const API_URL = 'https://us-central1-be-tp3-a.cloudfunctions.net/app/api/read';

export default function App() {

  const [equipo, setEquipo] = useState("Equipo NT2");

  const [flag, setFlag] = useState(true)

  const [vehiculos, setVehiculos] = useState([])


  useEffect(() => {
    buscarVehiculos();
  }, [])

  function buscarVehiculos() {
    fetch(API_URL)
      .then(res => {
        return res.json()
      })
      .then(data => setVehiculos(data))
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Listado de vehiculos: {vehiculos.length} </Text>
        <Button
          title="Ocultar lista"
          onPress={() => setFlag(!flag)}
        />
      </View>
      {
        (flag) ?

          <ScrollView>
            {
              vehiculos.map(vehiculo => (
                <Vehiculo
                  key={vehiculo.id}
                  marca={vehiculo.marca}
                  modelo={vehiculo.modelo}
                />
              ))
            }
          </ScrollView>
          :
          <View>
            <Text>No se muestra vehiculo</Text>
          </View>
      }


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
