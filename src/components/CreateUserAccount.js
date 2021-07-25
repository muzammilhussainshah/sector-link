import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView, } from 'react-native';
import { Card, CardSection, Input, Button, TextArea } from './common'
import { CheckBox, Avatar } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'


class CreateUserAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            checked: false,
        }
    }

    handleChoosePhoto = () => {
        const options = {
            noData: true
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log('response=====>', response)
            if (response.uri) {
                this.setState({ photo: response })
            }
        })
    }


    render() {
        const { containerStyle, createFormContainer, logoContainer, logo, gotoSigninStyle } = styles
        const { photo, checked } = this.state;
        let photoURI;
        photo ? photoURI = { uri: photo.uri } : photoURI = require('../assets/user3.jpg')
        return (
            <ScrollView style={containerStyle}>
                <KeyboardAvoidingView enabled behavior='padding' >


                    <View style={logoContainer}>
                        <Image source={require('../assets/sector.png')} style={logo} />
                    </View>

                    <View style={createFormContainer}>


                        <View style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 15 }}>
                            <Avatar
                                rounded
                                source={photoURI}
                                showEditButton
                                size='xlarge'
                                onPress={this.handleChoosePhoto}
                            />
                        </View>



                        <Card>
                            <CardSection>
                                <Input placeholder='John' label='First Name' returnKeyType='next' />
                            </CardSection>

                            <CardSection>
                                <Input placeholder='Cena' label='Last Name' returnKeyType='next' />
                            </CardSection>

                            <CardSection>
                                <Input placeholder='user@sectorlink.com' label='Email' returnKeyType='next' />
                            </CardSection>

                            <CardSection>
                                <Input placeholder='password' label='Password' returnKeyType='next' secureTextEntry />
                            </CardSection>
                            <CardSection>
                                <Input placeholder='password' label='Confirm Password' returnKeyType='next' secureTextEntry />
                            </CardSection>

                            <CardSection>
                                <Input placeholder='e.g Nursing Assistant' label='Job Title' returnKeyType='next' />
                            </CardSection>

                            <CardSection>
                                <TextArea label='About Me' placeholder='hi' returnKeyType='go' />
                            </CardSection>

                            {/* <CardSection>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                                    <TouchableOpacity onPress={this.handleChoosePhoto} style={{ flex: 1 }} >
                                        <Text style={{ color: '#f50041', fontSize: 15 }}>Upload Picture</Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: 2 }}>{photo && <Text>{photo.fileName}</Text>}</View>
                                </View>
                            </CardSection> */}

                            <CardSection>
                                <CheckBox
                                    title='I agree to the Terms and Conditions'
                                    checked={checked}
                                    onPress={() => this.setState({ checked: !this.state.checked })}
                                />
                            </CardSection>

                            <CardSection>
                                <Button>Create Account</Button>
                            </CardSection>
                        </Card>
                    </View>

                    <View style={gotoSigninStyle}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} >
                            <Text style={{ color: '#00b3c7' }}>Sign In</Text>
                        </TouchableOpacity>

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
export default CreateUserAccount