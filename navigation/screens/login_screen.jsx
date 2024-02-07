import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,KeyboardAvoidingView } from "react-native";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigation} from "@react-navigation/core";


function LoginScreen({}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    function handleSignUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                alert('SUCESSFULLY REGISTERED !')
                console.log('Registered with :',user.email);
            })
            .catch(error => console.log(error.message));
    }

    function handleLogin(){
        signInWithEmailAndPassword(auth,email,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with',user.email);
                navigation.navigate('Navigation');
            })
            .catch(error => console.log(error.message));
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})