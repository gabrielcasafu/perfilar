import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Footer() {

    return (
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row', backgroundColor: '#eeeeee', height: 25, marginBottom: 90 },  
});