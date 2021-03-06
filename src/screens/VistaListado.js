import * as React from "react";
import * as RN from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { database } from "../config/fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Productos from "../components/Productos";

export default function VistaListado(){

    const navegar = useNavigation();
    const [producto, setProducto] = React.useState([]);

    React.useLayoutEffect(()=>{
        navegar.setOptions({
            headerRight: () => <RN.Button title='Agregar' onPress={()=>navegar.navigate('CREAR ARTICULO')}/>
        })
    }, [])

    React.useEffect(()=>{
        const collectionRef = collection(database, 'Productos');
        const q = query(collectionRef, orderBy('fechaCreacion', 'desc'));

        const unsuscribe = onSnapshot(q, querySnapshot => {
            setProducto(
                querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    img: doc.data().img,
                    nombre: doc.data().nombre,
                    precio: doc.data().precio,
                    enVenta: doc.data().enVenta,
                    fechaCreacion: doc.data().fechaCreacion
                })

                )
            )})
        return unsuscribe;
    }, [])

    return(
        <>
        <RN.Text style={estilo.titulo}>
            Productos
        </RN.Text>
        {producto.map(producto => <Productos key={producto.id}{...producto}/>)}
        {/*<RN.Button title='atras' onPress={()=>navegar.navigate('CREAR ARTICULO')}/>*/}
        </>
    );
};

const estilo = RN.StyleSheet.create ({
    titulo:{
        fontSize: 30,
        color: "blue",
        fontWeight: "bold"
    }
})