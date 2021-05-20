import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import styles from './styles';
import TextFieldComponent from '../../Components/TextFieldComponent';

import ButtonComponent from '../../Components/ButtonComponent';

function LoginView(props) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [hidden, setHidden] = useState(true);


    function handleGoToRegister() {
        props.navigation.navigate('Register');
    }

    function handleGoToResetPassword() {
        props.navigation.navigate('ResetPassword');
    }

    function onShowPassword() {

        if (hidden) {
            setHidden(false);
        } else {
            setHidden(true)
        }
    }


    function handleLogin() {
        props.navigation.navigate('Terms')
    };


    return (
        <LinearGradient colors={['#ABEBED', '#B4D3EF', '#C6C5ED', '#E8BFE9', '#F8D7E2', '#FFF4E0']} style={styles.linearGradient}>
            <ScrollView >
                <View>
                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/icon/logo2.png')}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.titleText}>
                            Login to your account
                            </Text>
                    </View>

                    <TextFieldComponent
                        nameIcon="envelope-o"
                        styles={styles.SectionStyleEmail}
                        sizeIcon={18}
                        styleIcon={styles.iconInput}
                        color='#454545'
                        styleInput={styles.inputStyle}
                        placeholder=" Email"
                        value={email}
                        onChange={text => setEmail(Text)}
                    />
                    <View style={styles.SectionStylePassword}>
                        <Icon
                            name='lock'
                            type='font-awesome'
                            size={22}
                            iconStyle={styles.iconInput}
                            color='#454545'
                        />
                        <TextInput
                            secureTextEntry={hidden}
                            style={{ flex: 1, paddingLeft: 10 }}
                            placeholder=" Password "
                            underlineColorAndroid="transparent"
                            value={password}
                            onChangeText={text => setPassword(text)}

                        />
                        {
                            hidden ?
                                <Icon
                                    name='eye'
                                    type='font-awesome'
                                    size={22}
                                    iconStyle={styles.icon}
                                    color='#9f9f9f'
                                    onPress={() => onShowPassword()} />
                                :
                                <Icon
                                    name='eye-slash'
                                    type='font-awesome'
                                    size={22}
                                    iconStyle={styles.icon}
                                    color='#9f9f9f'
                                    onPress={() => onShowPassword()} />
                        }

                    </View>
                    <Text style={styles.titlePassword} onPress={handleGoToResetPassword}>
                        Forgot your password?
                        </Text>

                    <ButtonComponent
                        styleButton={styles.buttonLogin}
                        styleTitle={styles.textButton}
                        title='Login'
                        onPress={handleLogin}
                    />
                    <Text style={styles.baseText} onPress={handleGoToRegister}>
                        Create an account
                            <Text style={styles.innerText}> Here</Text>
                    </Text>
                </View>
            </ScrollView>
        </LinearGradient>
    );

}
export default LoginView;
