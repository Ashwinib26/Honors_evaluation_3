// app/(tabs)/screens/AsteroidDetails.jsx
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';

const AsteroidDetails = ({ route }) => {
  const { asteroidId } = route.params;
  const [asteroidData, setAsteroidData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAsteroidData = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=scoXhwLxTbmZ6v1EPfv0XINe5E4qIpE3KpJIOiJs`);
        const data = await response.json();
        setAsteroidData(data);
        setLoading(false);
      } catch (error) {
        Alert.alert('Error fetching asteroid details');
        setLoading(false);
      }
    };

    fetchAsteroidData();
  }, [asteroidId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!asteroidData) {
    return <Text>No data found</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {asteroidData.name}</Text>
      <Text>Nasa JPL URL: {asteroidData.nasa_jpl_url}</Text>
      <Text>Is Potentially Hazardous: {asteroidData.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</Text>
    </View>
  );
};

export default AsteroidDetails;
