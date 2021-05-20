import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Icon } from 'react-native-elements';
import ButtonComponent from '../../../Components/ButtonComponent';


function ConfirmationPasswordView(props) {


    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [hidden, setHidden] = useState(true);
    const [hiddenConf, setHiddenConf] = useState(true);
    const [confirmed, setConfirmed] = useState(false);

    function onShowPassword() {

        if (hidden) {
            setHidden(false);
        } else {
            setHidden(true)
        }
    }

    function onShowPasswordConfirmation() {

        if (hiddenConf) {
            setHiddenConf(false);
        } else {
            setHiddenConf(true)
        }
    }

    function validatePassword() {
        if ( password != "" && passwordConf != "" && password == passwordConf) {
            setConfirmed(true);
            console.log('Coinciden')
        }
        console.log(password);
        console.log(passwordConf);
    }

    return (
        <LinearGradient colors={['#ABEBED', '#B4D3EF', '#C6C5ED', '#E8BFE9', '#F8D7E2', '#FFF4E0']} style={styles.linearGradient}>
            <ScrollView >


                {

                    !confirmed ?
                        (
                            <View>
                                <View style={styles.container}>
                                    <Image
                                        style={styles.logo}
                                        source={require('../../../assets/icon/logo2.png')}
                                    />
                                </View>

                                <View style={styles.containerIcon}>
                                    <Icon
                                        name='check-circle-o'
                                        type='font-awesome'
                                        size={70}
                                        iconStyle={styles.iconStyle}
                                        color='#454545'
                                    />
                                </View>

                                <View style={styles.container} >
                                    <Text style={styles.innerText}> Reset your Password </Text>
                                </View>

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
                                        placeholder=" Enter a new password "
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

                                <View style={styles.SectionStylePassword}>
                                    <Icon
                                        name='lock'
                                        type='font-awesome'
                                        size={22}
                                        iconStyle={styles.iconInput}
                                        color='#454545'
                                    />
                                    <TextInput
                                        secureTextEntry={hiddenConf}
                                        style={{ flex: 1, paddingLeft: 10 }}
                                        placeholder=" Confirm your new password "
                                        underlineColorAndroid="transparent"
                                        value={passwordConf}
                                        onChangeText={text => setPasswordConf(text)}

                                    />
                                    {
                                        hiddenConf ?
                                            <Icon
                                                name='eye'
                                                type='font-awesome'
                                                size={22}
                                                iconStyle={styles.icon}
                                                color='#9f9f9f'
                                                onPress={() => onShowPasswordConfirmation()} />
                                            :
                                            <Icon
                                                name='eye-slash'
                                                type='font-awesome'
                                                size={22}
                                                iconStyle={styles.icon}
                                                color='#9f9f9f'
                                                onPress={() => onShowPasswordConfirmation()} />
                                    }

                                </View>

                                <ButtonComponent
                                    disabled={(password != '' && passwordConf != '') ? false : true}
                                    styleButton={styles.buttonLogin}
                                    styleTitle={styles.textButton}
                                    title='Restar Your Password'
                                    onPress={() => validatePassword()}
                                />

                                {
                                    (password != passwordConf) ? 
                                    (
                                        <View style={styles.container} >
                                            <Text style={styles.error}> passwords not coincident </Text>
                                        </View>
                                    ): null
                                }
                                

                            </View>
                        )


                        :

                        (

                            <View>
                                <View style={styles.container}>
                                    <Image
                                        style={styles.logo}
                                        source={require('../../../assets/icon/logo2.png')}
                                    />
                                </View>

                                <View style={styles.containerIcon}>
                                    <Icon
                                        name='check-circle-o'
                                        type='font-awesome'
                                        size={100}
                                        iconStyle={styles.iconStyle}
                                        color='#454545'
                                    />
                                </View>

                                <View style={styles.container} >
                                    <Text style={styles.innerText}> Successful Password reset! </Text>
                                </View>

                                <View style={styles.container} >
                                    <Text style={styles.innerText}> You can now use your new password to login into your account!</Text>
                                </View>

                                <ButtonComponent
                                    styleButton={styles.buttonLogin}
                                    styleTitle={styles.textButton}
                                    title='Login'
                                    onPress={() => {
                                        setConfirmed(false)
                                        props.navigation.navigate('Login')


                                    }}
                                />

                            </View>
                        )

                }


            </ScrollView>
        </LinearGradient>
    );

}
export default ConfirmationPasswordView;
