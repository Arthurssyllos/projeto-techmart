import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import HomeScreen from '../Principal/HomeScreen'; // Importe a tela HomeScreen

const Stack = createNativeStackNavigator ();

const AppRoute = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{headerShown : false}}
                />
                <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoute;