import { React } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sign-up"w
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar backgroundColor="blue" style="light" />
    </>
  );
};

export default AuthLayout;