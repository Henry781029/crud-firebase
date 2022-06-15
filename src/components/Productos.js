import * as React from 'react';
import * as RN from 'react-native';
import { database } from '../config/fb';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Productos ({
        id,
        img,
        nombre,
        precio,
        enVenta
}) {

    const onEdit=()=>{
        const docRef= doc(database, 'Productos', id);
        updateDoc(docRef, {
            enVenta: true,
        })
    }

    const onDelete = ()=>{
        const docRef= doc(database, 'Productos', id);
        deleteDoc(docRef);
    }

    return(
        <RN.ScrollView>
        <RN.View style = {estilo.contenedorProducto}>
            <RN.View style = {{flexDirection: 'row' , justifyContent: 'space-between'}}>
                <RN.Text style = {estilo.emoji}>{img}</RN.Text>
                <AntDesign onPress={onDelete} name="delete" size={24} color="red"/>
            </RN.View>
            <RN.Text style = {estilo.nombre}>{nombre}</RN.Text>
            <RN.Text style = {estilo.precio}>${precio}</RN.Text>
            {enVenta ?(
                <RN.TouchableOpacity style={[estilo.boton, {backgroundColor:"gray"}]}>
                    <RN.Text style={estilo.botonTexto}>
                        Comprar
                    </RN.Text>
                </RN.TouchableOpacity>
            ):(
                <RN.TouchableOpacity 
                    onPress={onEdit}
                    style={estilo.boton}>
                    <RN.Text style={estilo.botonTexto}>
                        Comprar
                    </RN.Text>
                </RN.TouchableOpacity>
            )}
            
        </RN.View>
        </RN.ScrollView>
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
