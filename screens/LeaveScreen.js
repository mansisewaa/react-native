import React from "react";

import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { RadioButton, Appbar } from "react-native-paper";

import FormButton from "../components/FormButton";


const LeaveScreen = () => {
    const [value, setValue] = React.useState('first');

    return (
        
        <View >
             <Appbar.Header>
                <Appbar.Content title="GeoApp" subtitle={'Leave Application'} />
              </Appbar.Header>
            
            <View style={styles.container}>
            
             <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Employee Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>

              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Department"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"/>

                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    <RadioButton.Item label="Sick Leave(SL)" value="first" />
                    <RadioButton.Item label="Casual Leave(CL)" value="second" />
                    <RadioButton.Item label="Annual Leave(AL)" value="third" />
                </RadioButton.Group>
                            
                <FormButton style = {styles.btn}
                    buttonTitle="Apply"
                    onPress={() => alert('Applied')}
                />
            </View>
        </View>
    
    )};

export default LeaveScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom:50
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
     btn: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     btnText:{
        color: 'white',
        justifyContent: 'center',
        
     }
})