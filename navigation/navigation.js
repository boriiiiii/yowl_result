import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/home_screen';
import SearchScreen from "./screens/search_screen";
import AddScreen from "./screens/add_screen";
import CalendarScreen from "./screens/calendar_screen";
import ProfileScreen from "./screens/profile_screen";
import LoginScreen from "./screens/login_screen";

//Screen names
const homeName = "Home";
const searchName = "Search";
const addName = "Add";
const calendarName = "Calendar";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = 'flash-outline';
                        } else if (rn === searchName) {
                            iconName = 'search-outline';
                        } else if (rn === addName) {
                            iconName = 'add-circle-outline';
                        } else if (rn === calendarName) {
                            iconName = 'calendar-clear-outline';
                        } else if (rn === profileName) {
                            iconName = 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#A58C4D',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                })}>

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={searchName} component={SearchScreen} />
                <Tab.Screen name={addName} component={AddScreen} />
                <Tab.Screen name={calendarName} component={CalendarScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />

            </Tab.Navigator>
    );
}

export default Navigation;
