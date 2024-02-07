import React, { useState, useLayoutEffect } from 'react';
import { Modal, View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from "../../firebase";
const { width, height } = Dimensions.get('window');

export default function ProfileScreen() {

    function handleSignout(){
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
            .catch(error => alert(error.message))
    }

    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../../assets/app/background.png')}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                                <Ionicons name="chevron-down-outline" size={24} color="#FFF" />
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>Paramètres</Text>
                            <View style={styles.placeholder}></View>
                        </View>
                        <ScrollView>
                            <TouchableOpacity style={styles.modalOption} onPress={() => {
                                setModalVisible(false);
                                navigation.navigate('Information');
                            }}>
                                <Ionicons name="person-outline" size={20} color="#FFF" />
                                <Text style={styles.modalOptionText}>Information</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalOption} onPress={() => {
                                setModalVisible(false);
                                navigation.navigate('Confidentialite');
                            }}>
                                <Ionicons name="lock-closed-outline" size={20} color="#FFF" />
                                <Text style={styles.modalOptionText}>Confidentialité</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalOption} onPress={() => {
                                setModalVisible(false);
                                navigation.navigate('Help');
                            }}>
                                <Ionicons name="information-circle-outline" size={20} color="#FFF" />
                                <Text style={styles.modalOptionText}>Help</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalOption} onPress={() => {
                                setModalVisible(false);
                                navigation.navigate('Condition');
                            }}>
                                <Ionicons name="book-outline" size={20} color="#FFF" />
                                <Text style={styles.modalOptionText}>Condition</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalOption} onPress={() => {
                                setModalVisible(false);
                                handleSignout();
                            }}>
                                <Ionicons name="log-in-outline" size={20} color="#FFF" />
                                <Text style={styles.modalOptionText}>Disconnect</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            <Image
                source={require('../../assets/app/logo.png')}
                style={styles.logo}
            />

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>
                    Profile Screen
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Ionicons name="settings-outline" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '8%',
        height: '8%',
        position: 'absolute',
        top: '6%',
        left: '10%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    modalView: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'black',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: 'flex-start',
        elevation: 5,
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    closeButton: {
        padding: 10,
    },
    placeholder: {
        width: 65,
    },
    modalTitle: {
        color: 'white', // couleur du texte du titre
        fontSize: 18, // taille du texte du titre
        fontWeight: 'bold', // gras pour le texte du titre
    },
    modalOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingLeft: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255,255,255,0.2)',
        width: '100%',
    },
    modalOptionText: {
        marginLeft: 20,
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    }
});
