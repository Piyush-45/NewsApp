import React, { useContext, } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import emailIcon from "../assets/email.png";
import passwordIcon from "../assets/password.png";
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/authContext';


const Login = () => {

    const navigation = useNavigation()
    const { email, setEmail, password, setPassword, signIn, loading } = useContext(AuthContext)

    return (
        <SafeAreaView style={Styles.signupContainer}>
            <View style={Styles.container}>
                <View>
                    <Text style={Styles.heading}>Sign In </Text>
                    <Text style={{ color: '#121212', fontWeight: '400', fontSize: 16 }}>Welcome back! Log in to access your personalized news experience and stay informed.</Text>
                </View>
                <View style={Styles.inputContainer}>
                    <Image source={emailIcon} style={Styles.inputImage} />
                    <TextInput
                        style={Styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={Styles.inputContainer}>
                    <Image source={passwordIcon} style={Styles.inputImage} />
                    <TextInput
                        style={Styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                </View>
                {loading ? (<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }} >
                    <ActivityIndicator color={'#F05941'} size={'large'} />
                </View>) : (
                    <TouchableOpacity style={Styles.btn} onPress={signIn}>
                        <Text style={{ color: 'white' }}>Sign In</Text>
                    </TouchableOpacity>

                )

                }
                <View style={{ display: 'flex', flexDirection: 'row', gap: 8, alignContent: 'center' }}>
                    <Text>Don't have an account?</Text>

                    <TouchableOpacity>
                        <Text onPress={() => navigation.navigate('signup')} style={{
                            marginLeft: 5,
                            color: 'blue',
                        }}>Sign Up!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
};

const Styles = StyleSheet.create({
    signupContainer: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 20,
    },

    heading: {
        fontSize: 32,
        fontWeight: '700',
        // textDecorationLine: 'underline',
        // textDecorationColor: '', // Set underline color
        color: '#121212', // Set text color
    },



    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 16,
        width: '100%',
        height: 70,
    },
    input: {
        flex: 1,
        height: 70,
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontSize: 16,
    },
    inputImage: {
        height: 25,
        objectFit: 'contain',
        marginLeft: 10, // Adjust the margin to your preference
    },
    btn: {
        backgroundColor: '#F05941',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 50,
        marginTop: 20,
        width: '100%' // Add some margin for separation
    },
});

export default Login;
