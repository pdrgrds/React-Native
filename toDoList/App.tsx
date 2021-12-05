import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './modules';
import { Provider } from 'react-redux';
import store from './redux-form/store';

export default function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}