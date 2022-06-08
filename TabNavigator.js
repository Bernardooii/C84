import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions = {({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Feed') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === 'Criar História') {
                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            activeColor = {"#EE8249"}
            inactiveColor = {"gray"}
    >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Criar História" component={CreateStory} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    droidSafeArea  :{
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTitleText:{
        color: "white",
        fontSize:RFValue(30)
    },
    cardContainer:{
        flex:0.85
    }
})

export default BottomTabNavigator