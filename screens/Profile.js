import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/authContext';
import news from '../assets/news.jpg';

const Profile = () => {
  const { username, signOut, email } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    await signOut();
    // Additional navigation or logic after logout if needed
    navigation.navigate('home'); // for example, redirect to the login screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={news} style={styles.backgroundImage} />
      {username || email ? (
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoText}>{`Hello, ${username || email}!`}</Text>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.authButtonsContainer}>
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => navigation.navigate('signup')}
          >
            <Text style={styles.authButtonText}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => navigation.navigate('login')}
          >
            <Text style={styles.authButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userInfoContainer: {
    alignItems: 'center',
  },
  userInfoText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  logoutButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
  authButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  authButton: {
    backgroundColor: '#F05941',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 50,
    width: '48%', // Adjust width for better spacing
  },
  authButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Profile;
