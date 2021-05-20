import * as React from 'react';
import { View, Text, Image, TouchableHighlight } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements'

// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Personal from './Personal';
import SocialMedia from './SocialMedia';
import Manager from './Manager'
import { useNavigation } from '@react-navigation/native';

import ButtonComponent from '../../../Components/ButtonComponent';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const theme = {
    colors: {
      background: "transparent",
    },
  };

function TabStack() {
    return (
        <Tab.Navigator
            initialRouteName="Personal"
            ceneContainerStyle={{backgroundColor: 'transparent'}}
            tabBarOptions={{
                style: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    elevation: 0,
                },
                labelStyle: {
                    fontSize: 12,
                },
          }}>
       
        <Tab.Screen
            name="Personal"
            component={Personal}        
            options={{
            tabBarLabel: 'Personal',         
            }}  />
        <Tab.Screen
            name="SocialMedia"
            component={SocialMedia}
            options={{
            tabBarLabel: 'Social Media',
            }} />
        <Tab.Screen
            name="Manager"
            component={Manager}
            options={{
            tabBarLabel: 'Manager',
            }} />
        </Tab.Navigator>
    );
  }

const RegisterCreator = () => {

    
    const navigation = useNavigation();

        return (
            <LinearGradient colors={['#ABEBED', '#B4D3EF', '#C6C5ED', '#E8BFE9', '#F8D7E2', '#FFF4E0']} style={styles.linearGradient}>
                <View style={styles.btnBack}>
                    <Button 
                        theme={theme}
                        icon={
                            <Icon
                            name="arrow-left"
                            size={70}
                            color="white"
                            />
                        }
                        iconLeft
                        onPress={() => {
                            navigation.navigate('Register')}}
                    />
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/icon/logo2.png')}
                    />
                </View>

                <Text style={styles.subText}>
                        Create your
                </Text>

                <Text style={styles.text}>
                        CREATOR ACCOUNT
                </Text>

                <NavigationContainer
                    independent={true}
                    theme={theme}
                >
                    <Tab.Navigator                   
                        tabBarOptions={{
                            style: {
                              backgroundColor:'transparent',
                              borderTopWidth: 0,
                              position: 'absolute',
                              elevation: 0
                            },
                          }}>
                        <Tab.Screen name="TabStack" component={TabStack}/>
                    </Tab.Navigator>
                </NavigationContainer>
              
            </LinearGradient>
        );    
    }

export default RegisterCreator;
