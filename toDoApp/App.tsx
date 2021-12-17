/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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