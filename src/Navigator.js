import React from 'react'
import {
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddManifestation from './screens/AddManifestation'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'
import Splash from './screens/Splash'

const authRouter = createStackNavigator({
    Login: {screen: Login, navigationOptions: {title: 'Login'}},
    Register: {screen: Register, navigationOptions: {title: 'Criar Conta'}}
},{
    initialRouteName: 'Login'
})

const loginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
},{
    initialRouteName: 'Auth'
})

const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddManifestation',
        screen: AddManifestation,
        navigationOptions: {
            title: 'AddManifestation',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='plus' size={30} color={tintColor} />
        }
    },
    Login: {
        name: 'Login',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Login',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Login',
    tabBarOptions: {
        showLabel: false
    }
}

const MenuNavigation = createBottomTabNavigator(MenuRoutes, MenuConfig)

const SplashRouter = createSwitchNavigator({
    Splash: Splash,
    App: MenuNavigation
},{
    initialRouteName: 'Splash'
})

export default SplashRouter