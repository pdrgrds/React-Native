import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './ToDoList/Home';
import Agregar from './ToDoList/Agregar';
import Editar from './ToDoList/Editar';

const Stack = createNativeStackNavigator();

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