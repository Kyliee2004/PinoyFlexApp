import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot, Stack } from 'expo-router';

import { useFonts} from 'expo-font'//add this import
import { useEffect } from 'react'//add this import
import { SplashScreen } from 'expo-router'//add this import

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

    const [fontsLoaded, error] = useFonts({
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
         "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
         "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
       
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      

  return (
    <>
    <View style={styles.container}>
      <Stack>
        <Slot />
      </Stack>
    </View></>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ba160c', 
  },
});

export default MainLayout;