import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <Box>Hello world</Box>
            <Button
                title="Go to profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Nicole' })
                }
            />
        </NativeBaseProvider>

    );
};

export default HomeScreen;