import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import {useLayoutEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";

export default function AddScreen({ navigation }) {
    const navigation_setting = useNavigation()

    useLayoutEffect(() => {
        navigation_setting.setOptions({
            headerShown : false
        })
    })
    return (
        <ImageBackground
            source={require('../../assets/app/background.png')}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}
        >
             <Image
                source={require('../../assets/app/logo.png')}
                style={styles.logo}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Add Screen</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '8%',  // Adjust the percentage according to your preference
        height: '8%',  // Adjust the percentage according to your preference
        position: 'absolute',
        top: '6%',  // Adjust the percentage according to your preference
        left: '10%',  // Adjust the percentage according to your preference
    },
});
