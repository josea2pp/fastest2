// React Native Tab
// https://aboutreact.com/react-native-tab/
import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import { Icon } from 'react-native-elements';
import styles from './styles';
import TextFieldComponent from '../../../../Components/TextFieldComponent';

import ButtonComponent from '../../../../Components/ButtonComponent';

const Personal = () => {

const [local, guardarLocal] = useState('');
const [managerName, guardarManagerName] = useState('');
const [email, guardarEmail] = useState('');
const [password, guardarPassword] = useState('');
const [managerPhone, guardarManagerPhone] = useState('');

  return (
    <ScrollView>
        <View style={styles.container} >

            <TextFieldComponent
                nameIcon="map-marker"
                styles={styles.SectionStyleInput}
                sizeIcon={18}
                styleIcon={styles.iconInput}
                color='#454545'
                styleInput={styles.inputStyle}
                placeholder=" Local"
                value={local}
                onChangeText={ texto => guardarLocal(texto) }
            />

            <TextFieldComponent
                nameIcon="edit"
                styles={styles.SectionStyleInput}
                sizeIcon={18}
                styleIcon={styles.iconInput}
                color='#454545'
                styleInput={styles.inputStyle}
                placeholder=" Manger Name"
                value={managerName}
                onChangeText={ texto => guardarManagerName(texto) }
            />
            
            <TextFieldComponent
                nameIcon="envelope-o"
                styles={styles.SectionStyleInput}
                sizeIcon={18}
                styleIcon={styles.iconInput}
                color='#454545'
                styleInput={styles.inputStyle}
                placeholder=" Email"
                value={email}
                onChangeText={ texto => guardarEmail(texto) }
            />

            <TextFieldComponent
                nameIcon="phone"
                styles={styles.SectionStyleInput}
                sizeIcon={18}
                styleIcon={styles.iconInput}
                color='#454545'
                styleInput={styles.inputStyle}
                placeholder=" Manager phone nmuber"
                value={managerPhone}
                onChangeText={ texto => guardarManagerPhone(texto) }
            />

            <TextFieldComponent
                nameIcon="lock"
                styles={styles.SectionStyleInput}
                sizeIcon={18}
                styleIcon={styles.iconInput}
                color='#454545'
                styleInput={styles.inputStyle}
                placeholder=" Password"
                value={password}
                onChangeText={ texto => guardarPassword(texto) }
            />

            <ButtonComponent
                styleButton={styles.buttonNext}
                styleTitle={styles.textButton}
                title='Register'
                onPress={() => {}}
            />
            
        </View>
    </ScrollView>
  );
}


export default Personal;