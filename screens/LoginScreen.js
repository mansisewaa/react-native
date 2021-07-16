import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";


import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.jpg')}
                style={styles.logo}
            />

             <Text style={styles.text}>Login</Text>

            <FormInput
                labelValue={email}
                iconType="user"
                placeholderText="Email"
                onChangeText= {(userEmail)=> setEmail(userEmail)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                iconType="lock"
                placeholderText="Password"
                onChangeText= {(userPassword)=> setPassword(userPassword)}
                secureTextEntry={true}
                
            />

            <FormButton 
                buttonTitle="Signup"
                onPress={() => alert('You are logged in')}
                
            />

            <TouchableOpacity 
                style={styles.forgotButton} 
                onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.navButtonText}>
                       Forgot Password  
                    </Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f9fafd",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },

    text: {
        fontFamily: 'Kufan-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: "#051d5f"
    },
    navButton: {
        marginTop: 15,
    },

    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },


});