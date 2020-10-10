import React from 'react';
import { FlatList } from 'react-native';
import Row from "./Row";

const renderItem = ({item}) => ( <Row contacto={item} />)

const FlatListContact =({contactos}) => (
    <FlatList
        data={contactos}
        renderItem={renderItem}
        keyExtractor={item => item.key.toString()}
    />
)

export default FlatListContact;