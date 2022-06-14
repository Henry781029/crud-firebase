import * as React from "react";
import react from "react";
import * as RN from 'react-native';
import EmojiPicker from "rn-emoji-keyboard";

export default function Agregar(){

    const [isOpen, setIsOpen ] = react.useState(true);
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
            <RN.Text>
            Vender o Nuevo Producto
            </RN.Text>
            <RN.Text>
            {NuevoItem.img}
            <EmojiPicker
            onEmojiSelected={handlePick}
            open={isOpen}
            onClose={()=>setIsOpen(false)}
            />
            </RN.Text>
        </RN.View>    
    );
};

const estilo = RN.StyleSheet.create({
    vista:{
        flex: 1,
        backgroundColor: "white",
        alignItems:"center"
    }
})