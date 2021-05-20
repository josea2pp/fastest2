// React Native Tab
// https://aboutreact.com/react-native-tab/
import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import { Icon } from 'react-native-elements';
import styles from './styles';
import { Picker } from '@react-native-community/picker';

import TextFieldComponent from '../../../../Components/TextFieldComponent';

import ButtonComponent from '../../../../Components/ButtonComponent';

const SocialMedia = () => {

const [userName, guardarUserName] = useState('');
const [redSocial, guardarRedSocial] = useState('');

// Almacena las selecciones del usuario
const obtenerRedSocial = redSocial => {
  guardarRedSocial(redSocial)
}

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
                placeholder=" User name"
                value={userName}
                onChangeText={ texto => guardarUserName(texto) }
            />
            <View>
            <Picker
                selectedValue={redSocial}
                onValueChange={ redSocial => obtenerRedSocial(redSocial) }
                itemStyle={{ height: 120 }}
                style={styles.SectionStyleSelect}
            >
                <Picker.Item label="- Seleccione -" value="/" /> 
                <Picker.Item label="Google" value="GO" /> 
                <Picker.Item label="Gmail" value="G" /> 
                <Picker.Item label="Facebook" value="F" /> 
                <Picker.Item label="Instagram" value="I" /> 
            </Picker>
            </View>
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


export default SocialMedia;