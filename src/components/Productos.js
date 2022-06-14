import * as React from 'react';
import * as RN from 'react-native';
import { database } from '../config/fb';
import { deleteDoc, Doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Productos ({
        id,
        img,
        nombre,
        precio,
        enVenta
}) {
    return(
        <RN.View style = {estilo.contenedorProducto}>
            <RN.Text style = {estilo.emoji}>{img}</RN.Text>
            <RN.Text style = {estilo.nombre}>{nombre}</RN.Text>
            <RN.Text style = {estilo.precio}>{precio}</RN.Text>
        </RN.View>
    )
}

const estilo = RN.StyleSheet.create ({
    contenedorProducto:{
        padding: 16,
        backgroundColor: "#fff",
        margin: 16,
        borderRadius: 8
    },
    nombre:{
        fontSize: 32,
        fontWeight: "bold"
    },
    precio:{
        fontSize: 24,
        fontWeight: "bold",
        color:"gray"
    },
    emoji:{
        fontSize: 100,
    },
    boton:{
        backgroundColor: "blue",
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: "center"
    },
    botonTexto:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff"
    }
})
