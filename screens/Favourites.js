import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Your favourite news stories will be shown here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
   
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    fontWeight: 'bold',
    borderWidth:2,
    borderColor:'#F05941',
    borderStyle:'dashed',
    padding:10
  },
});

export default Favourites;
