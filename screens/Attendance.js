import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

const Attendance = () => {
    return (
        <View style= { styles.container}>
            <Text>Attendane</Text>

            <Button
                title="Click here"
                onPress={()=> alert('Button Clicked!')}
            />

        </View>
    );
};

export default Attendance ;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})