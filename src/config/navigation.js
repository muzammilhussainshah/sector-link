import React from 'react'
import { Text } from 'react-native';

import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createBottomTabNavigator, createTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import * as Router from '../components/index'


const AuthNavigator = createSwitchNavigator({
    Login: {
        screen: Router.Login
    },
    CreateUserAccount: {
        screen: Router.CreateUserAccount
    },
    CreateCompanyAccount: {
        screen: Router.CreateCompanyAccount
    }
});

const AppNavigator = createStackNavigator({
    MainScreen: {
        screen: createMaterialTopTabNavigator({
            ChatList: {
                screen: Router.ChatList, navigationOptions: {
                    tabBarLabel: 'Chat List'
                },
            },
            Contacts: {
                screen: Router.Contacts, navigationOptions: {
                    tabBarLabel: 'Contacts'
                }
            },
            MyProfile: {
                screen: Router.MyProfile, navigationOptions: {
                    tabBarLabel: 'My Profile'
                }
            }
        }), navigationOptions: {
            headerRight: <Text style={{ fontSize: 25 }}>Setting</Text>,
            // title:'home',
            headerBackTitle: null,
        }
    }
})

const MainNavigator = createSwitchNavigator({
    Auth: {
        screen: AuthNavigator,
    },
    App: {
        screen: AppNavigator
    }
})


export default createAppContainer(MainNavigator);
