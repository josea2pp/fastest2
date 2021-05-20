import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { Icon } from 'react-native-elements';
import ButtonComponent from '../../../Components/ButtonComponent';

function MessageConfirmationView(props) {

    return (
        <LinearGradient colors={['#ABEBED', '#B4D3EF', '#C6C5ED', '#E8BFE9', '#F8D7E2', '#FFF4E0']} style={styles.linearGradient}>
            <ScrollView >
                <View>
                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={require('../../../assets/icon/logo2.png')}
                        />
                     </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Great!
                        </Text>
                    </View>
                    
                    <View style={styles.containerIcon}>
                        <Icon
                            name='paper-plane'
                            type='font-awesome'
                            size={50}
                            iconStyle={styles.iconInput}
                            color='#FFFFFF'
                        />
                    </View>

                    <View style={styles.container} >
                        <Text style={styles.innerText}> We have sent you an email to reset your password! </Text>
                    </View>   

                    <ButtonComponent
                        styleButton={styles.buttonLogin}
                        styleTitle={styles.textButton}
                        title='Continuar'
                        onPress={()=> props.navigation.navigate('PasswordConfirmation')}
                    />
                    
                </View>
            </ScrollView>
        </LinearGradient>
    );


}
export default MessageConfirmationView;
