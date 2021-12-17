import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import Item from './ItemListado';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './../../redux-form/actions';

const Home = (props:any) => {
    const { navigation: { navigate }, navigation, actions } = props;

    return(
        <View style={styles.contenedor}>
            <View style={styles.contenedorCrear}>
              <Button title='Crear' onPress={() => navigate('Create')} />
            </View>
            <FlatList
              data={props.lista || []}
              renderItem={({item, index}) => <Item key={index} item={item} actions={actions} navigate={navigate} />}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    )
}

function mapStateToProps(state:any) {
    return ({
      lista: state.tareas.ListaTareas
    })
}
function mapDispatchToProps(dispatch:any) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Home);
const Home_ = (props:any) => {
  console.log(props)
  return <View><Text>Home</Text></View>
}
export default connect(mapStateToProps, mapDispatchToProps)(Home); 

const styles = StyleSheet.create({
  contenedor: {
    padding: 20
  },
  contenedorCrear: {
    marginBottom: 30
  },
  templateFonts: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  separator: {
    height: 10
  }
});