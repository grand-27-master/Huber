import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import { store } from './store';
import Home from './screens/Home';
import { registerRootComponent } from 'expo';

export default function App() {
    return (
        <Provider store={store}>
        <Home/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

registerRootComponent(App);