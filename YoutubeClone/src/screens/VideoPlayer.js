import React from "react";
import { Text, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview'



const VideoPlayer = ({ route }) => {
    const { videoId } = route.params
    return (
        <View style={{ flex: 1 }} >
            <View style={{ width: '100%', height: 200 }} >
                <WebView  javaScriptEnabled={true} domStorageEnabled={true} source={{ uri: `https://www.youtube.com/embed/${videoId}` }} />
            </View>
            <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 20, width: Dimensions.get('screen').width - 50, margin: 9 }}></Text>
            <View style={{ borderBottomWidth: 1 }} />
        </View>
    )
}

export default VideoPlayer;