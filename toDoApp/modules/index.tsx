import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './ToDoList/Home';
import Agregar from './ToDoList/Agregar';
import Editar from './ToDoList/Editar';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const Agregar_ = () => <View><Text>AGREGAR</Text></View>
const Editar_ = () => <View><Text>EDITAR</Text></View>

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Create" component={Agregar}/>
                <Stack.Screen name="Edit" component={Editar}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;