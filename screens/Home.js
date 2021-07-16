import React from "react";

import { View, Text, StatusBar,  Button, StyleSheet } from "react-native";
import { Appbar } from 'react-native-paper';

const Home = () => {
    return (
     <View>
        <Appbar.Header>
                <Appbar.Content title="GeoApp" subtitle={'Home'} />
        </Appbar.Header>
        
        </View>
    );
         
        
       
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})