import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Agregar from './screens/Agregar'
import VistaListado from './screens/VistaListado'

const Pantallas = createNativeStackNavigator();

function MisPantallas(){
    return(
        <Pantallas.Navigator>
            <Pantallas.Screen
                name='LISTADO'
                component={VistaListado}
            />
            <Pantallas.Screen
                name='CREAR ARTICULO'
                component={Agregar}
            />
        </Pantallas.Navigator>
    );
};

export default function Navegacion(){
    return(
        <NavigationContainer>
            <MisPantallas
            
            />
        </NavigationContainer>
    )
}