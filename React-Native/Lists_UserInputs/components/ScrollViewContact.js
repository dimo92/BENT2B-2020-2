import React from 'react';
import { ScrollView } from 'react-native';
import Row from "./Row";

const ScrollViewContact =({contactos}) => (
    <ScrollView>
        {
          contactos.map((contacto) => (
            <Row key={contacto.key} contacto={contacto} />  
          ))
        }
      </ScrollView>
)

export default ScrollViewContact;