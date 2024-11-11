import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';

const moviesData = [
  { id: '1', title: 'Movie 1', imageUrl: 'https://path-to-movie1-image.jpg' },
  { id: '2', title: 'Movie 2', imageUrl: 'https://path-to-movie2-image.jpg' },
  { id: '3', title: 'Movie 3', imageUrl: 'https://path-to-movie3-image.jpg' },
  { id: '4', title: 'Movie 4', imageUrl: 'https://path-to-movie4-image.jpg' },
  { id: '5', title: 'Movie 5', imageUrl: 'https://path-to-movie5-image.jpg' },
  { id: '6', title: 'Movie 6', imageUrl: 'https://path-to-movie6-image.jpg' },
  // Add more movie items as needed
];

const BookmarkScreen = () => {
  const renderMovieItem = ({ item }) => (
    <View style={styles.movieContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.movieImage} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bookmark</Text>
      <FlatList
        data={moviesData}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two columns for grid layout
        contentContainerStyle={styles.movieList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  movieList: {
    paddingHorizontal: 10,
  },
  movieContainer: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieImage: {
    width: 150,  // Adjust the size as needed
    height: 220, // Adjust the size as needed
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default BookmarkScreen;
