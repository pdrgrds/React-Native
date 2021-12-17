import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../redux-form/actions';

const PlantillaField = (props:any) => {
    return(
        <View style={styles.contenedorInput}>
            <Text>{props.title}: </Text>
            <TextInput
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType='default'
                autoCapitalize='none'
                placeholder={props.ph}
                onBlur={props.input.onBlur}
            />
            { props.meta.error && props.meta.touched && <Text>{props.meta.error}</Text> }
        </View>
    )
}

const validate = (values:any) => {
    const errors:any = {};
        if(!values.name) errors.name = 'Requerido';
        if(!values.descripcion) errors.descripcion = 'Requerido';
    return errors;
}

const guardarTarea = (values:any, props:any) => {
    console.log(values)
    props.actions.editarTarea(values);
    props.navigation.goBack();
}

const eliminarTarea = (props:any) => {
    const { actions, initialValues, navigation } = props;
    actions.eliminarTarea(initialValues.key);
    navigation.goBack();
}

const FormTarea = (props:any) => {
    const { route: { params: { keyTarea } }, actions } = props;
    console.log(keyTarea, actions);

    useEffect(() => {
        console.log('cargando...')
        actions.traerTarea(keyTarea);
    }, [true])
    
    return(
        <View style={styles.contenedor}>
            <Field name='name' component={PlantillaField} ph='Inserte un título' title='Título: '/>
            <Field name='descripcion' component={PlantillaField} ph='Inserte una descripción' title='Descripción: '/>
            
            <View>
                <TouchableOpacity onPress={props.handleSubmit((value:any) => guardarTarea(value, props))} style={styles.button}>
                    <Text style={styles.textButton}>GUARDAR</Text>
                </TouchableOpacity>
                <Button title="Eliminar" onPress={() => eliminarTarea(props)} />
            </View>
        </View>
    )
}

function mapStateToProps(state:any) {
    return {
      initialValues: state.tareas.onlyOne
    }
}

function mapDispatchToProps(dispatch:any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (reduxForm<any,any>({form: 'FormTarea', enableReinitialize: true,  validate})(FormTarea));

const styles = StyleSheet.create({
    contenedor: {
        padding: 20
    },
    contenedorInput: {
        marginBottom: 10
    },
    button: {
        backgroundColor: 'rgb(33, 150, 243)',
        padding: 10,
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    }
});