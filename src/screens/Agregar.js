import * as React from "react";
import react from "react";
import * as RN from 'react-native';
import EmojiPicker from "rn-emoji-keyboard";

export default function Agregar(){

    const [isOpen, setIsOpen ] = react.useState(false);
    const [NuevoItem, setNuevoItem] = react.useState({
        img: '🐎',
        nombre: ' ',
        precio: 0,
        enVenta: ' ',
        fechaCreacion: new Date(),
    });

    const handlePick = (emojiObject)=>{
        setNuevoItem ({
            ...NuevoItem,
            img: emojiObject.emoji,
        });
    }

    return(
        <RN.View style = {estilo.vista}>
            <RN.Text style={estilo.titulo}>
                Nuevo Producto
            </RN.Text>
            <RN.Text style={estilo.emoji} onPress={()=>setIsOpen(true)}>
                {NuevoItem.img}
            </RN.Text>
            <EmojiPicker
                onEmojiSelected={handlePick}
                open={isOpen}
                onClose={()=>setIsOpen(false)}
            />
            <RN.TextInput
                onChangeText={(text)=>setNuevoItem({...NuevoItem, nombre:text})}
                placeholder="Nombre del Producto"
                style = {estilo.container}
            />
            <RN.TextInput
                onChangeText={(text)=>setNuevoItem({...NuevoItem, precio:text})}
                placeholder="$ precio"
                style = {estilo.container}
                keyboardType="number-pad"
            />
            {/*<RN.Button title="Ingresar bd" onPress={(onSend)} />*/}
        </RN.View>    
    );
};

const estilo = RN.StyleSheet.create({
    vista:{
        flex: 1,
        backgroundColor: "white",
        alignItems:"center"
    },
    titulo:{
        fontSize: 32,
        fontWeight: '700',
    },
    emoji:{
        fontSize: 100,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 6,
        padding: 10,
        marginVertical: 6
    },
    container:{
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor:"red",
        borderRadius: 6
    }
})