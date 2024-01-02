import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import image2 from "../assets/melodi.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image3.jpeg";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const delay = 2000; // Set the delay duration in milliseconds (e.g., 2000 for 2 seconds)

    const timeoutId = setTimeout(() => {
      navigation.navigate('intro'); // Replace 'Home' with the name of your next screen
    }, delay);

    // Clear the timeout on component unmount (cleanup)
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>FlashFeed</Text>
        <Text style={styles.tagline}>Quick, Trendy, FlashFeed Ready.</Text>
      </View>
      <View style={styles.imageContainer} >
        <View style={{ position: "absolute", top: 70, right:30}}>
          <Image source={image2} style={{ position: "relative", left: '14%', height: 150, width: 270, objectFit: 'cover' }} />
          <Image source={image5} style={{ position: "relative", bottom: '1%', right: '5%', height: 150, width: 250, objectFit: 'cover' }} />
          <Image source={image4} style={{ position: "relative", top: -10, left: 30, height: 150, width: 270, objectFit: 'cover' }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginRight:20
  },
  header: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 40,
  },
});

export default Splash;
