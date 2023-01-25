import React, { useState } from "react";
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MiniCard from "../components/MiniCard";
import { useTheme } from "@react-navigation/native";

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDYTtzMiPhjSmnvQGzfrBMXsPE4ldtTNzs

const SearchScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const textcolor = colors.iconColor
    const [value, setValue] = useState("");
    const [miniCardData, setMiniCard] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(` https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDYTtzMiPhjSmnvQGzfrBMXsPE4ldtTNzs`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMiniCard(data.items)
            })
    }
    return (
        <View style={{ flex: 1 }} >
            <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-around', elevation: 5, backgroundColor: colors.headerColor }} >
                <Ionicons style={{ color: textcolor }} name="arrow-back" size={32} onPress={() => navigation.goBack()} />
                <TextInput style={{
                    width: '70%',
                    backgroundColor: '#e6e6e6'
                }} value={value} onChangeText={(text) => setValue(text)} />
                <Ionicons style={{ color: textcolor }} name="send-sharp" size={32} onPress={() => fetchData()} />
            </View>
            {loading ? <ActivityIndicator style={{ marginTop: 10 }} size='large' color='red' /> : null}
            <FlatList data={miniCardData} renderItem={({ item }) => {
                return <MiniCard videoId={item.id.videoId} title={item.snippet.title} channel={item.snippet.channelTitle} />
            }}
                keyExtractor={item => item.id.videoId}
            />
        </View>
    )
}

export default SearchScreen;