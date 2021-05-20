import * as React from 'react';
import { View, Text, Image, TouchableHighlight, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from './../../Components/ButtonComponent';

const RegisterView = () => {

    const theme = {
        colors: {
          primary: 'transparent',

        }
      }
      

    const navigation = useNavigation();

        return (
            <LinearGradient colors={['#ABEBED', '#B4D3EF', '#C6C5ED', '#E8BFE9', '#F8D7E2', '#FFF4E0']} style={styles.linearGradient}>
                <ScrollView >
                <View style={styles.btnBack}>

                </View>
                    <View>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/icon/logo2.png')}
                        />
                    </View>

                    <Text style={styles.subText}>
                            Create your account
                    </Text>

                    <Text style={styles.text}>
                            My account is for a...
                    </Text>

                    <TouchableHighlight style={styles.btnBrand}>
                        <Text style={styles.textBrand}>Brand</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btnCreator} 
                    title="Back"
                    onPress={() => {
                    navigation.navigate('RegisterCreator')}}>
                        <Text style={styles.textCreator}>Creator</Text>
                    </TouchableHighlight>

                    <View>
                    <Text style={styles.textQuestion}>
                            Have already an account?
                        <TouchableHighlight >
                            <Text style={styles.loginHere}> Login here</Text>
                        </TouchableHighlight>
                    </Text>
                    
                    </View>
                </ScrollView>
            </LinearGradient>
        );    
    }

export default RegisterView;
