import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // To use icons for Google and Facebook
import home from './tabs/home'; // Import your LoginScreen

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>Pinoy Flex</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>LOG IN</Text>
        <Link to="/home">home</Link>
      </TouchableOpacity>

      <Text style={styles.orText}>OR LOG IN BY</Text>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.signUpText}>Don't have an account? SIGN UP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f4a4a', // Matching the gray background
  },
  logoContainer: {
    marginBottom: 50,
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Cursive', // Custom font styling like in the image
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  loginButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#7a5cff', // Purple button color
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  orText: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  signUpText: {
    fontSize: 16,
    color: '#9a73ef',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
