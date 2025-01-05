import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import Course from './Course';
import Subjects from './Subjects';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#4B0082', // Purple color for active tab
                tabBarInactiveTintColor: '#A9A9A9', // Gray color for inactive tab
                tabBarLabelStyle: styles.tabBarLabel,
                tabBarIcon: ({ focused }) => {
                    let iconSource;
                    if (route.name === 'Profile') {
                        iconSource = require('../assets/profile.png');
                    } else if (route.name === 'Course') {
                        iconSource = require('../assets/course.png');
                    } else if (route.name === 'Subjects') {
                        iconSource = require('../assets/subjects.png');
                    }
                    return (
                        <Image
                            source={iconSource}
                            style={[
                                styles.icon,
                                { tintColor: focused ? '#4B0082' : '#A9A9A9' }, // Tint color based on focus
                            ]}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Course"
                component={Course}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Subjects"
                component={Subjects}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 70, // Adjust height for the bar
        paddingBottom: 10, // Space for icons and text
        paddingTop: 10,
        backgroundColor: '#FFFFFF', // White background
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5', // Border color for separation
    },
    tabBarLabel: {
        fontSize: 12, // Font size for labels
        fontWeight: '600', // Slightly bold for readability
    },
    icon: {
        width: 25, // Icon width
        height: 25, // Icon height
    },
});
