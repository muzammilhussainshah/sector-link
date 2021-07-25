import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Input, Card, CardSection, Button } from './common'




class Login extends Component {
    render() {
        const { containerStyle, logoContainer, logo, loginFormContainer, createAccountContainer } = styles
        return (
            <KeyboardAvoidingView enabled behavior='padding' style={containerStyle} >
                <View style={logoContainer}>
                    <Image source={require('../assets/sector.png')} style={logo} />
                </View>


                <View style={loginFormContainer}>
                    <Card>
                        <CardSection>
                            <Input placeholder='user@sectorlink.com' label='Email' returnKeyType='next' />
                        </CardSection>
                        <CardSection>
                            <Input placeholder='password' label='Password' returnKeyType='go' secureTextEntry />
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => this.props.navigation.navigate('MainScreen')}>Log In</Button>
                        </CardSection>
                    </Card>
                </View>


                <View style={createAccountContainer}>
                    <Text>Don't have an account? Create</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateUserAccount')} style={{ margin: 3 }}>
                            <Text style={{ color: '#00B3C7', fontWeight: 'bold' }}>User Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 3 }}>
                            <Text style={{ fontWeight: 'bold' }}> | </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateCompanyAccount')} style={{ margin: 3 }} >
                            <Text style={{ color: '#00B3C7', fontWeight: 'bold' }}>Company Account</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        margin: 15,
        // borderWidth:1,
        marginBottom: 0
    },
    logo: {
        width: 270,
        height: 120,
        resizeMode: 'stretch'
    },
    loginFormContainer: {
        // borderWidth:1,
        margin: 5,
        marginTop: 15,
        marginBottom: 15
    },
    createAccountContainer: {
        // paddingTop: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'column',
        // borderWidth: 1
    }

})
export default Login;