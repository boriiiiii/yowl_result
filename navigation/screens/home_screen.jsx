import * as React from 'react';
import { useLayoutEffect, useState } from 'react';
import { ImageBackground, View, Image, ScrollView,StyleSheet,Text} from 'react-native';

import Calendar from "../components/Calendar";
import EventCard from "../components/Event_Card";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const navigation_setting = useNavigation();

    useLayoutEffect(() => {
        navigation_setting.setOptions({
            headerShown: false
        });
    });

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/app/background.png')}
                style={{ flex: 1, resizeMode: 'cover'}}
            >
                <Image
                    source={require('../../assets/app/logo.png')}
                    style={styles.logo}
                />

                <View style={{ marginTop: 110 }}>
                    <Calendar
                        className=""
                        onSelectDate={setSelectedDate}
                        selected={selectedDate}
                    />
                </View>

                
            <ScrollView>
                <EventCard
                    organizerName="John Doe"
                    imagePath="cocktails"
                    date="2024-01-30 18:00"
                    title="Concert de Rock"
                    city="Paris"
                    theme="Musique"
                    seatsAvailable="100"
                />
                <EventCard
                    organizerName="John Doe"
                    imagePath="clubbing"
                    date="2024-01-30 18:00"
                    title="Concert de Rock"
                    city="Paris"
                    theme="Musique"
                    seatsAvailable="100"
                />
                <EventCard
                    organizerName="John Doe"
                    imagePath="antagonist"
                    date="2024-01-30 18:00"
                    title="Concert de Rock"
                    city="Paris"
                    theme="Musique"
                    seatsAvailable="100"
                />
            </ScrollView>
            </ImageBackground>
        </View>
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
});
