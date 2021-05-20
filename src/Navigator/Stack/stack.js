import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '../../Views/stackRoutes';

const Stack = createStackNavigator();

function MainNavigator() {
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                headerMode="screen"
            >
                <Stack.Screen
                    name="Login"
                    component={Routes.LoginView}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Routes.RegisterView}
                    options={{
                        headerShown: false,
                    }}

                />
                <Stack.Screen
                    name="RegisterCreator"
                    component={Routes.RegisterCreator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={Routes.ResetPasswordView}
                    options={{
                        headerShown: false,
                    }}

                />
                <Stack.Screen
                    name="SuccessPassword"
                    component={Routes.MessageConfirmationView}
                    options={{
                        headerShown: false,
                    }}

                />
                <Stack.Screen
                    name="PasswordConfirmation"
                    component={Routes.ConfirmationPasswordView}
                    options={{
                        headerShown: false,
                    }}

                />
                <Stack.Screen
                    name="Terms"
                    component={Routes.TermsView}
                    options={{
                        headerShown: false,
                    }}

                />
                <Stack.Screen
                    name="InfoUser"
                    component={Routes.InfoUser}
                    options={{
                        headerShown: false,
                    }}

                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MainNavigator
