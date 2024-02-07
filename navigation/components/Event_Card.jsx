import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
    useFonts,
    Inter_400Regular,
    Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
    useFonts as useMichromaFonts,
    Michroma_400Regular,
} from "@expo-google-fonts/michroma";
import images from "../../assets/event_image";

const EventCard = ({
                       organizerName,
                       imagePath,
                       date,
                       title,
                       city,
                       theme,
                       seatsAvailable,
                   }) => {
    const imageSource = images[imagePath] || images["default"];

    let [interFontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_700Bold,
    });

    let [michromaFontsLoaded] = useMichromaFonts({
        Michroma_400Regular,
    });

    if (!interFontsLoaded || !michromaFontsLoaded) {
        return null;
    }

    return (
        <View style={styles.cardContainer}>
            <Text style={[styles.organizer2, { fontFamily: 'Michroma_400Regular'}]}>{organizerName}</Text>
            <Image source={imageSource} style={styles.image} />
            <Text style={[styles.title, { fontFamily: 'Inter_700Bold' }]}>{title}</Text>
            <View style={styles.organizerContainer}>
                <Text style={[styles.organizer, { fontFamily: 'Michroma_400Regular' }]}>{organizerName}</Text>
            </View>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.city}>{city}</Text>
            <Text style={[styles.theme, { fontFamily: 'Inter_700Bold'}]}>{theme}</Text>
            <View style={styles.seatsContainer}>
                <Text style={[styles.seats, { fontFamily: 'Inter_700Bold' }]}>{seatsAvailable}</Text>
                <Text style={[styles.seatsLabel, { fontFamily: 'Inter_400Regular' }]}> Seats</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        margin: 16,
        padding: 16,
        paddingBottom: 40,
        border: "1px solid #ccc",
        borderRadius: 8,
        backgroundColor: "transparent",

    },
    image: {
        height: 160,
        width: "100%",
        borderRadius: 8,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 8,
        textTransform: 'uppercase',
        color: "white",
        position: "absolute",
        top: 175,
        left: 15,

    },
    organizerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    organizer: {
        fontSize: 11,
        color: "white",
        position: "absolute",
        top: 10,
    },
    organizer2: {
        fontSize: 15,
        color: "white",
        position: "absolute",
        top: 13,
        left: 20,
    },
    date: {
        fontSize: 11,
        color: "white",
        fontFamily: 'Michroma_400Regular',
        flex: 1,
        textAlign: "right",
        top: 35,
    },
    time: {
        fontSize: 11,
        color: "white",
        fontFamily: 'Michroma_400Regular',
        flex: 1,
        textAlign: "right",
    },
    city: {
        fontSize: 13,
        color: "white",
        fontFamily: 'Michroma_400Regular',
        textAlign: "right",
    },
    theme: {
        fontSize: 11,
        color: "white",
        textTransform: 'uppercase',
        textAlign: "right",
        top: 30,
    },
    seatsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        position: "absolute",
        top: 260,
        left: 17,
    },
    seatsLabel: {
        fontSize: 11,
        color: "white",
        marginRight: 4,
        fontWeight: 'bold',
    },
    seats: {
        fontSize: 11,
        color: "white",
    },
});

export default EventCard;