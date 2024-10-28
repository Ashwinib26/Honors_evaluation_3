// app/(tabs)/screens/Home.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const Home = ({ navigation }) => {
  const [asteroidId, setAsteroidId] = useState('');

  const handleSearch = () => {
    if (asteroidId) {
      navigation.navigate('AsteroidDetails', { asteroidId });
    }
  };

  const handleRandomAsteroid = async () => {
    try {
      const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=scoXhwLxTbmZ6v1EPfv0XINe5E4qIpE3KpJIOiJs');
      const data = await response.json();
      const randomAsteroid = data.near_earth_objects[Math.floor(Math.random() * data.near_earth_objects.length)];
      navigation.navigate('AsteroidDetails', { asteroidId: randomAsteroid.id });
    } catch (error) {
      Alert.alert('Error fetching random asteroid');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Search Here"
        value={asteroidId}
        onChangeText={setAsteroidId}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Submit" onPress={handleSearch} disabled={!asteroidId} />
      <Button title="Random Asteroid" onPress={handleRandomAsteroid} />
    </View>
  );
};

export default Home;
