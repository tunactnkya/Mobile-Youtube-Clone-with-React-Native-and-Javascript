import React from "react";
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation, useTheme } from "@react-navigation/native";


function Header() {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const mycolor = colors.iconColor
    return (
        <View style={{
            height: 45,
            backgroundColor: colors.headerColor,
            flexDirection: 'row',
            justifyContent: 'space-between',
            elevation: 6
        }} >
            <View style={{
                flexDirection: 'row',
                margin: 5
            }} >
                <AntDesign
                    style={{
                        marginLeft: 20
                    }}
                    name="youtube" size={32} color='red' />
                <Text style={{
                    fontSize: 22,
                    marginLeft: 5,
                    fontWeight: 'bold',
                    color: 'white'
                }} >Youtube</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: 150,
                margin: 5
            }} >
                <Ionicons name="videocam" size={32} color={mycolor} />
                <Ionicons name="search" size={32} color={mycolor} onPress={() => navigation.navigate("search")} />
                <MaterialCommunityIcons name='account-circle' size={32} color={mycolor} />
            </View>
        </View>
    )
}


export default Header;