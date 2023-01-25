import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation, useTheme } from "@react-navigation/native";


const Card = (props) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const textcolor = colors.iconColor
    return (
        <TouchableOpacity onPress={() => navigation.navigate("videoplayer", { videoId: props.videoId, title: props.title })} >
            <View style={{ marginBottom: 10 }} >
                <Image
                    style={{
                        width: '100%',
                        height: 200
                    }}
                    source={{ uri: "https://images.unsplash.com/photo-1674561621624-5ff0d156f5ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }} />


                <View style={{ flexDirection: 'row', margin: 5 }} >
                    <MaterialIcons name="account-circle" size={40} color='#212121' />
                    <View style={{
                        marginLeft: 10
                    }} >
                        <Text ellipsizeMode="tail" style={{ fontSize: 20, width: '70%', fontWeight: 'bold', color: textcolor }} >This is amazing view in galaxy my earth , my planet </Text>
                        <Text style={{color:textcolor}} >This is amazing </Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card;    