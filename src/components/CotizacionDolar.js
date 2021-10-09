import React from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';

export default function CotizacionDolar(props) {
    const { cotizacionMoneda } = props


    return (
        <View style={styles.container}>
            <Text style={styles.item}>
            {cotizacionMoneda && cotizacionMoneda[0].casa.nombre}:
                <Text style={{fontWeight: "bold"}}> ${cotizacionMoneda && cotizacionMoneda[0].casa.compra} -</Text>
                <Text style={{fontWeight: "bold"}}> ${cotizacionMoneda && cotizacionMoneda[0].casa.venta} </Text>
         
            {cotizacionMoneda && cotizacionMoneda[1].casa.nombre}:
                <Text style={{fontWeight: "bold"}}> ${cotizacionMoneda && cotizacionMoneda[1].casa.compra} -</Text>
                <Text style={{fontWeight: "bold"}}> ${cotizacionMoneda && cotizacionMoneda[1].casa.venta}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        height: 40,
        lineHeight: 40,
        paddingHorizontal: 10,
        fontSize: 12,
    }
});