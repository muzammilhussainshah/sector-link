import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

class ChatList extends Component {


    // componentDidMount(){
    //     fetch('https://picsum.photos/v2/list?page=2&limit=15').the
    // }
    renderChats() {
        const { containerStyle, chatsStyle } = styles;
        return (
            <View>
                <TouchableOpacity style={chatsStyle}>
                    <View>
                        <Image source={require('../assets/mark.jpg')} style={{ height: 55, width: 55, borderRadius: 55 / 2 }} />
                    </View>
                    <View style={{ marginLeft: 10,paddingTop:4 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Mark Zuckerberg</Text>
                        <Text>IT Manager</Text>
                    </View>
                    <View style={{ marginLeft: 'auto',paddingTop:4 }}>
                        <Text>03:19 AM</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={chatsStyle}>
                    <View>
                        <Image source={require('../assets/mark.jpg')} style={{ height: 55, width: 55, borderRadius: 55 / 2 }} />
                    </View>
                    <View style={{ marginLeft: 10,paddingTop:4 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Mark Zuckerberg</Text>
                        <Text>IT Manager</Text>
                    </View>
                    <View style={{ marginLeft: 'auto',paddingTop:4 }}>
                        <Text>03:19 AM</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={chatsStyle}>
                    <View>
                        <Image source={require('../assets/mark.jpg')} style={{ height: 55, width: 55, borderRadius: 55 / 2 }} />
                    </View>
                    <View style={{ marginLeft: 10,paddingTop:4 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Mark Zuckerberg</Text>
                        <Text>IT Manager</Text>
                    </View>
                    <View style={{ marginLeft: 'auto',paddingTop:4 }}>
                        <Text>03:19 AM</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        const { containerStyle, chatsStyle } = styles;
        return (
            <ScrollView style={containerStyle}>
                {this.renderChats()}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff'
    },
    chatsStyle: {
        // borderWidth: 1,
        height: 80,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        borderBottomColor:'gray',
        borderBottomWidth:0.3
    }
})

export default ChatList;