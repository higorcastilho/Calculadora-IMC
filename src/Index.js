import { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  SplashScreen from './screens/splash/SplashScreen';
import  MainScreen  from './screens/main/MainScreen';

const AppNavigator = createStackNavigator({

    Splash: {
        screen: SplashScreen,
    },
    Main: {
        screen: MainScreen, 
    }
})

const Navigation = createAppContainer(AppNavigator);

export default Navigation;