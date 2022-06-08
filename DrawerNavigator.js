import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";


export default class DrawerNavigator extends Component {
    render() {
        <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image
                        source={require("../assets/logo.png")}
                        style={styles.iconImage}
                        ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Espectagrama</Text>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={posts}
                renderItem={this.renderItem}
                />
            </View>
        </View>
    }
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