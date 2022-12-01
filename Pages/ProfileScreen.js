import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, FlatList } from 'react-native';
import { NativeBaseProvider, Box, HStack, VStack, Text, Spacer, Button } from "native-base";

import axios from 'axios'

const Stack = createNativeStackNavigator();

const ProfileScreen = ({ navigation, route }) => {
  const [data, setData] = useState()
  const [driverData, setDriverData] = useState()

  useEffect(() => {
    const baseURL = "http://ergast.com/api/f1/2022/drivers.json";
    axios.get(`${baseURL}`).then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    if (data) {
      if (data.MRData) {
        if (data.MRData.DriverTable) {
          setDriverData(data.MRData.DriverTable.Drivers)
        }
      }
    }
  }, [data]);

  console.log('Drivers', driverData)
  return (
    <NativeBaseProvider>
      <FlatList
        data={driverData}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50" }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <VStack>
                <Button>
                <Text _dark={{ color: "warmGray.50" }} color="coolGray.800" bold>
                  {item.givenName}  {item.familyName}
                </Text>
                </Button>
              </VStack>
              <Spacer />
            </HStack>
          </Box>
        )}
      />
    </NativeBaseProvider>
  );
};

export default ProfileScreen;