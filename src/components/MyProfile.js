import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView, FlatList } from 'react-native';
import { Card, CardSection, Input, Button, TextArea } from './common'
import { CheckBox, Avatar } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'
import { TextInput } from 'react-native-gesture-handler';

class MyProfile extends Component {
    constructor() {
        super()
        this.state = {
            edit1: false,
            edit2: false,
            edit3: false,
            edit4: false,
            edit5: false,
            editCompany1: false,
            editCompany2: false,
            editCompany3: false,

        }
    }
    render() {
        let UserDetails = [
            {
                icon: <Entypo name="user" size={20} style={{ color: "#c2c5c8", fontSize: 30 }} />,
                text: "muzammil"
            },
            {
                icon: <AntDesign name="team" size={20} style={{ color: "#c2c5c8", fontSize: 30 }} />,
                text: "laundry show"
            },
            {
                icon: <MaterialCommunityIcons name="email" size={20} style={{ color: "#c2c5c8", fontSize: 30 }} />,
                text: "showoflaundry@gmail.com"

            },
            {
                icon: <AntDesign name="team" size={20} style={{ color: "#c2c5c8", fontSize: 30 }} />,
                text: "Cheif technical operator"
            },
            {
                icon: <FontAwesome name="empire" size={20} style={{ color: "#c2c5c8", fontSize: 30 }} />,
                text: "Busy"
            },
        ]
        let companyDetails = [
            {
                icon: <AntDesign name="team" size={20} style={{ color: "#c2c5c8", fontSize: 30 }} />,
                text: "laundry show"
            },
            {
                icon: <MaterialCommunityIcons name="email" size={20} style={{ color: "#c2c5c8", fontSize: 30 }} />,
                text: "showoflaundry@gmail.com"
            },
            {
                icon: <AntDesign name="swap" size={20} style={{ color: "#c2c5c8", fontSize: 30 }} />,
                text: "online selling"

            },

        ]
        const { containerStyle, createFormContainer, logoContainer, logo, gotoSigninStyle } = styles
        return (
            <ScrollView style={containerStyle}>
                <KeyboardAvoidingView enabled behavior='padding' >

                    <View style={createFormContainer}>
                        {/* profile pic */}
                        <View style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 15 }}>
                            <Avatar
                                rounded
                                source={{ uri: "https://twistedsifter.files.wordpress.com/2012/09/trippy-profile-pic-portrait-head-on-and-from-side-angle.jpg?w=800" }}
                                showEditButton
                                size='xlarge'
                            />
                        </View>
                        {/* profile pic */}
                        {/* data maping */}

                        <Card>
                            <FlatList
                                data={UserDetails}
                                renderItem={({ item, index }) => {
                                    let value = item
                                    let indexing = index
                                    console.log(value, "valllll")
                                    return (
                                        <CardSection>
                                            <View style={{ flexDirection: "row", flex: 1 }}>
                                                <View style={{ flex: 1 }}>
                                                    {value.icon}
                                                </View>
                                                <View style={{ flex: 7 }}>
                                                    {(this.state[`${"editCompany" + indexing}`]) ?
                                                        (
                                                            <TextInput
                                                            style={{ height: 35 }}
                                                            placeholder="Type here..."
                                                            // value="muzammil"
                                                            />
                                                            ) :
                                                            (
                                                            <Text style={{ fontSize: 15, padding: 5, color: "#ADB6BF" }}>{value.text}</Text>
                                                            )}
                                                </View>
                                                <View style={{ flex: 1.5 }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            this.setState({
                                                                [[`${"editCompany" + indexing}`]]: !this.state[`${"editCompany" + indexing}`]
                                                            })
                                                        }}
                                                        >

                                                        <Text style={{ fontSize: 15, padding: 5, color: "#00B3C7", textDecorationLine: "underline" }}>edit</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </View>
                                        </CardSection>
                                    )
                                    
                                }}
                                />

                        </Card>
                                {/* data maping */}

                        {/* horizontal line */}
                        <View style={{ marginVertical: "5%", borderColor: "#ADB6BF", borderWidth: 0.5, opacity: 0.2, width: "60%", marginHorizontal: "20%" }}>
                        </View>
                        {/* horizontal line */}

                        {/* company heading */}
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 23, color: "#00B3C7", opacity: 0.5 }}>
                                Company details:
                            </Text>
                        </View>
                        {/* company heading */}

                        {/* company maping */}
                            {/* company maping */}
                        <Card>
                            <FlatList
                                data={companyDetails}
                                renderItem={({ item, index }) => {
                                    let value = item
                                    let indexing = index + 1
                                    console.log(value, "valllll", this.state[`${"edit" + indexing}`])
                                    return (
                                        <CardSection>
                                            <View style={{ flexDirection: "row", flex: 1 }}>
                                                <View style={{ flex: 1 }}>
                                                    {value.icon}

                                                </View>
                                                <View style={{ flex: 7 }}>
                                                    {(this.state[`${"edit" + indexing}`]) ?
                                                        (
                                                            <TextInput
                                                                style={{ height: 35 }}
                                                                placeholder="Type here..."
                                                            // value="muzammil"
                                                            />
                                                        ) :
                                                        (
                                                            <Text style={{ fontSize: 15, padding: 5, color: "#ADB6BF" }}>{value.text}</Text>
                                                        )}
                                                </View>
                                                <View style={{ flex: 1.5 }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            this.setState({
                                                                [[`${"edit" + indexing}`]]: !this.state[`${"edit" + indexing}`]
                                                            })
                                                        }}
                                                    >

                                                        <Text style={{ fontSize: 15, padding: 5, color: "#00B3C7", textDecorationLine: "underline" }}>edit</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </View>
                                        </CardSection>
                                    )
                                }}
                            />
                        </Card>
                            {/* company maping */}
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        margin: 15,
        // borderWidth:1,
    },
    logo: {
        width: 270,
        height: 120,
        resizeMode: 'stretch'
    },
    createFormContainer: {
        margin: 5,
        // flexGrow: 2,
        // borderWidth:1,
        marginTop: 15,
        marginBottom: 15
    },
    gotoSigninStyle: {
        // paddingTop: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        // borderWidth: 1
    }
})

export default MyProfile;