import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import search from "../assets/searchIcon.png";
import bellIcon from "../assets/bell.png";
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const Header = () => {
    const [text, setText] = useState('');

    const handleInputChange = (inputText) => {
        setText(inputText);
    };

    const handleButtonPress = () => {
        // Do something with the input text
        console.log('Input Text:', text);
    };

    return (
        <View style={{marginBottom:2}}>
            <Animated.View style={styles.searchContainer} >

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', borderColor: '#818181', borderWidth: 2, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 16 }}>

                    <TextInput placeholder='Covid new variant...' value={text} onChangeText={handleInputChange} style={{ fontSize: 14, color: '#818181' }} />
                    <TouchableOpacity>
                        <Image source={search} /></TouchableOpacity>
                </View>
                <View style={styles.bellIcon}>
                    <TouchableOpacity ><Image source={bellIcon} style={{height:18, objectFit:'contain', }}  /></TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
}

export default Header;


const styles = StyleSheet.create({
    
        searchContainer: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        },
        search: {
          // width
        },
        bellIcon: {
          backgroundColor: '#F05941',
          paddingVertical: 6,
          paddingHorizontal: 1,
          height: 40,
          width: 40,
          borderRadius: 20,
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
        }
})