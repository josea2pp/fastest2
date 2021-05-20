// React Native Tab
// https://aboutreact.com/react-native-tab/
import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import { Icon } from 'react-native-elements';
import styles from './styles';
import TextFieldComponent from '../../../../Components/TextFieldComponent';

import ButtonComponent from '../../../../Components/ButtonComponent';

const Personal = () => {

const [firstName, guardarFirstName] = useState('');
const [lastName, guardarLastName] = useState('');
const [email, guardarEmail] = useState('');
const [phone, guardarPhone] = useState('');
const [birthday, guardarBirthday] = useState('');

  return (
    <ScrollView>
        <View style={styles.container} >

            <TextFieldComponent
                nameIcon="user"
                styles={styles.SectionStyleInput}
                sizeIcon={18}
                styleIcon={styles.iconInput}
                color='#454545'
                styleInput={styles.inputStyle}
                placeholder=" First Name"
                value={firstName}
                onChangeText={ texto => guardarFirstName(texto) }
            />

            <TextFieldComponent
                nameIcon="edit"
                styles={styles.SectionStyleInput}
                sizeIcon={18}
                styleIcon={styles.iconInput}
                color='#454545'
                styleInput={styles.inputStyle}
                placeholder=" Last Name"
                value={lastName}
                onChangeText={ texto => guardarLastName(texto) }
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
                placeholder=" Phone"
                value={phone}
                onChangeText={ texto => guardarPhone(texto) }
            />

            <TextFieldComponent
                nameIcon="birthday-cake"
                styles={styles.SectionStyleInput}
                sizeIcon={18}
                styleIcon={styles.iconInput}
                color='#454545'
                styleInput={styles.inputStyle}
                placeholder=" Birthday"
                value={birthday}
                onChangeText={ texto => guardarBirthday(texto) }
            />

            <ButtonComponent
                styleButton={styles.buttonNext}
                styleTitle={styles.textButton}
                title='Next'
                onPress={() => {}}
            />
            
        </View>
    </ScrollView>
  );
}


export default Personal;