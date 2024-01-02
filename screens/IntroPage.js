import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';  // Import LinearGradient from expo-linear-gradient
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import dev from "../assets/dev.jpg";
import { StatusBar } from 'expo-status-bar';

const IntroPage = () => {

  const navigation = useNavigation()
  return (
    <LinearGradient
      colors={['rgba(182,170,170,1)', 'rgba(77,77,88,1)', 'rgba(240,243,244,1)']}
      start={{ x: -10, y: 0 }
      }
      end={{ x: 1, y: 0 }}
      style={styles.gradient} >
      {/* <SafeAreaView style={styles.gradient}> */}
      < View >
        <Image source={dev} style={styles.image} />
      </View >

      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          Get The Latest News And Updates
        </Text >
        <Text style={styles.para}>From Politics to Entertainment: Your One-Stop Source for Comprehensive Coverage of the Latest News and Developments Across the Globe will be right on your hand. </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>

      {/* </SafeAreaView> */}
    </LinearGradient >
  );
};

const styles = StyleSheet.create({

  gradient: {
    flex: 1,
  },
  image: {
    height: hp('55%'),
    width: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    display: 'flex',
    textAlign: 'center',
    // backgroundColor:'red',
    marginTop: 10,
    gap: 10,
    height: hp('30%')
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  para: {
    textAlign: 'center',
    // fontfamily: Schibsted Grotesk,
    fontSize:hp(2.5),
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    color: '#6D6265'
  },

  button: {
    width: widthPercentageToDP('70%'),
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingVertical: 18,
    paddingHorizontal: 70,
    borderRadius: 10,
    position: 'absolute',
    bottom: hp('10%')
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'700',
    textAlign: 'center',
  },
});

export default IntroPage;
