import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For icons

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Log out</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
        <FontAwesome name="microphone" size={24} color="#fff" style={styles.microphoneIcon} />
      </View>

      {/* Main Content */}
      <ScrollView>
        <Text style={styles.heading}>What would you like to watch?</Text>

        {/* New Movies Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Movies:</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image source={{ uri: 'https://path-to-spiderman-image.png' }} style={styles.movieThumbnail} />
            <Image source={{ uri: 'https://path-to-matrix-image.png' }} style={styles.movieThumbnail} />
            <Image source={{ uri: 'https://path-to-eternals-image.png' }} style={styles.movieThumbnail} />
          </ScrollView>
        </View>

        {/* Recent Movies Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Movies you've watched:</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image source={{ uri: 'https://path-to-aquaman-image.png' }} style={styles.movieThumbnail} />
            <Image source={{ uri: 'https://path-to-dune-image.png' }} style={styles.movieThumbnail} />
            <Image source={{ uri: 'https://path-to-sonic-image.png' }} style={styles.movieThumbnail} />
          </ScrollView>
        </View>
      </ScrollView>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity>
          <FontAwesome name="home" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="plus-circle" size={36} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user-circle" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f4a4a', // Dark background like the image
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
  },
  logoText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 25,
    color: '#fff',
  },
  microphoneIcon: {
    marginLeft: 10,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 15,
    marginBottom: 10,
  },
  movieThumbnail: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 15,
  },
});

export default HomeScreen;
