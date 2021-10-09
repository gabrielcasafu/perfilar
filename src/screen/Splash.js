import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export default class Splash extends Component {

    render(){
        
        return (
            <>
            <StatusBar backgroundColor="#6200ee" />
            <View style={styles.container}>
                <Text style={styles.splashText}>
                    PERFIL<Text style={styles.perfilar}>/</Text>AR
                </Text>
            </View>
            </>
        )
    }

    
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
        fontSize: 40,
        fontWeight: 'bold',
        
    },
    perfilar: {
        color: 'black',
    }    
});