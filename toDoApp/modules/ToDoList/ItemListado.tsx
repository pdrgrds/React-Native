import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const redirect = (navigate:any, key:string, actions:any) => {
    navigate("Edit", { keyTarea: key });
}

const Item = (props:any) => {
    const { item, navigate, actions } = props;
    return(
        <TouchableOpacity onPress={() => redirect(navigate, item.key, actions)} style={styles.contenedor}>
            <Text style={styles.fontTitle}>{ item.name }</Text>
            <Text style={styles.fontDescription}>{ item.descripcion }</Text>
        </TouchableOpacity> 
    )
}

export default Item;

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#232120',
        padding: 10,
        borderRadius: 15
    },
    fontTitle: {
        color:'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    fontDescription: {
      color:'white',
      fontSize: 15,
    }
  });