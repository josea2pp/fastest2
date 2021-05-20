import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Icon } from 'react-native-elements';
import TextFieldComponent from '../../Components/TextFieldComponent';
import ButtonComponent from '../../Components/ButtonComponent';

function ResetPasswordView(props) {

    const [email, setEmail] = useState(null);

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
                            Reset your Password
                        </Text>
                    </View>
                    
                    <Text style={styles.innerText}> Enter your email address and we will send you a code to reset your password</Text>

                    <TextFieldComponent
                        nameIcon="envelope-o"
                        styles={styles.SectionStyleEmail}
                        sizeIcon={18}
                        styleIcon={styles.iconInput}
                        color='#454545'
                        styleInput={styles.inputStyle}
                        placeholder=" Enter your email"
                        value={email}
                        onChange={text => setEmail(text)}
                    />

                    <ButtonComponent
                        styleButton={styles.buttonLogin}
                        styleTitle={styles.textButton}
                        title='Send Code'
                        onPress={()=> props.navigation.navigate('SuccessPassword')}
                    />

                    <View style={styles.containerText} >
                        <Text style={styles.baseText} onPress={()=> props.navigation.navigate('Login') }>
                            Login here
                                
                        </Text>
                    </View>   
                    
                </View>
            </ScrollView>
        </LinearGradient>
    );


}
export default ResetPasswordView;
