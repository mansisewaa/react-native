import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

const Stack = createStakNavigator();
const Tab = createBottomTabNavigator();


const AppStack = ({navigation}) => {
    <Stack.Navigator>
        <StackScreen >
            name="GeoApp"
            component={HomeScreen}
            options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#2e64e5',
                    fontFamlily: 'Kurfan_SemiBoldItalic',
                    fontSize:18              
                },
            headerStyle: {
                shadowColor: '#fff',
                elevation: 0,
             },
             headerRight: () => (
                 <View style={{marginRight: 10}}>

                 </View>
             )
         }
    }
       
    </StackScreen >
    </Stack.Navigator>
},
export default AppStack;