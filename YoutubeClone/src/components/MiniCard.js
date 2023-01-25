import React from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from "@react-navigation/native";


const MiniCard = (props) => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const textcolor = colors.iconColor
    return (
        <TouchableOpacity onPress={() => navigation.navigate("videoplayer", { videoId: props.videoId, title: props.title })} >
            <View style={{ flexDirection: 'row', margin: 10, marginBottom: 0 }} >
                <Image
                    style={{
                        width: '45%',
                        height: 100
                    }}
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }} />
                <View style={{ paddingLeft: 7 }} >
                    <Text ellipsizeMode="tail" numberOfLines={3} style={{ fontSize: 17, width: Dimensions.get("screen").width / 2,color:textcolor }} > {props.title} </Text>
                    <Text style={{ fontSize: 12 ,color:textcolor}} >{props.channel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MiniCard;