import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Header() {

    return (
        <Appbar.Header>
            <Appbar.Content 
                title={<Text style={styles.splashText}>
                PERFIL<Text style={styles.perfilar}>/</Text>AR
            </Text>} 
                subtitle="Noticias en tiempo real" 
                style={{ alignItems: 'center' }}/>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignItems: 'center' ,
        height: '100%',
    },
    splashText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    perfilar: {
        color: 'black',
    }    
});