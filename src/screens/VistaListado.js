import * as React from "react";
import * as RN from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function VistaListado(){

    const navegar = useNavigation();

    return(
        <>
        <RN.Text>
            ACA HACIENDO COSITAS
        </RN.Text>
        <RN.Button title='atras' onPress={()=>navegar.navigate('CREAR ARTICULO')}/>
        </>
    );
};