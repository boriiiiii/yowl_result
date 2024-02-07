import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {auth} from "../../firebase";
function ConfidentialiteScreen() {

    navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Email : {auth.currentUser?.email}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>CONFIDENTIALITE</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ConfidentialiteScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})