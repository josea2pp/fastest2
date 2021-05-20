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
                            source={require('../../assets/icon/person-icon.png')}
                        />
                    </View>

                    
                </ScrollView>
            </LinearGradient>
        );    
    }

export default RegisterView;