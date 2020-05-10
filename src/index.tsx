import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import {persistor, store} from "./Redux";
import NavigationStacks from "./Navigation/Stacks";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <NavigationStacks/>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}
