import React from "react";

import {  StyleSheet } from "react-native";
import { Appbar } from 'react-native-paper';

const ProfileScreen = () => {
    return (

        <Appbar.Header>
        <Appbar.Content title="GeoApp" subtitle={'Profile'} />
       </Appbar.Header>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})