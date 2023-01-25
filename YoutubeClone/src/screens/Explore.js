import React from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import Header from "../components/Header";


const Explore = () => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }} >
                <Header />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }} >
                    <View style={{ backgroundColor: 'red', width: 180, borderRadius: 4, height: 50, marginTop: 10 }} >
                        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', marginTop: 5 }}>Gaming</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', width: 180, borderRadius: 4, height: 50, marginTop: 10 }} >
                        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', marginTop: 5 }}>Movies</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', width: 180, borderRadius: 4, height: 50, marginTop: 10 }} >
                        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', marginTop: 5 }}>News</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', width: 180, borderRadius: 4, height: 50, marginTop: 10 }} >
                        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', marginTop: 5 }}>Fashion</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', width: 180, borderRadius: 4, height: 50, marginTop: 10 }} >
                        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', marginTop: 5 }}>Music</Text>
                    </View>
                    <View style={{ backgroundColor: 'red', width: 180, borderRadius: 4, height: 50, marginTop: 10 }} >
                        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', marginTop: 5 }}>Trending</Text>
                    </View>
                </View>

                <Text style={{
                    margin: 8,
                    fontSize: 20,
                    borderBottomWidth: 1
                }} >Trending Videos</Text>
                <View>
                    <Image
                        style={{
                            width: '100%',
                            height: 200
                        }}
                        source={{ uri: "https://i.ytimg.com/vi/0NSC0HjCbOA/maxresdefault.jpg" }} />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }} >Trending TikTok Songs 2023 - Viral songs latest- TikTok songs playlist</Text>
                </View>
                <View>
                    <Image
                        style={{
                            width: '100%',
                            height: 200
                        }}
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUiJl9RFDjOUVJI8-dIUi9L-d4OL_yTtb8eg&usqp=CAU" }} />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }} >Earn $2440-/Per Month movie explain and earn money on YouTube | movie review income</Text>
                </View>
                <View>
                    <Image
                        style={{
                            width: '100%',
                            height: 200
                        }}
                        source={{ uri: "https://i.ytimg.com/vi/BJ8wW1YhwZ4/maxresdefault.jpg" }} />
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                    }} >THE ICEBREAKER - FULL ACTION MOVIE | True Story Survival Thriller</Text>
                </View>

            </View>
        </ScrollView>
    )
}

export default Explore;