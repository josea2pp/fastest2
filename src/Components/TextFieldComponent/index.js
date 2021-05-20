import React from "react";
import { View, Text, TextInput } from "react-native";
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

function TextFieldComponent(props) {
    return (
        <View style={props.styles}>
            <Icon
                name={props.nameIcon}
                type='font-awesome'
                size={props.sizeIcon}
                iconStyle={props.styleIcon}
                color={props.color}
            />
            <TextInput
                style={props.styleInput}
                placeholder={props.placeholder}
                underlineColorAndroid="transparent"
                value={props.value}
                onChangeText={props.onChange}
            />
        </View>
    );
};

TextFieldComponent.propTypes = {
    onChange: PropTypes.func,
    nameIcon: PropTypes.string,
    sizeIcon: PropTypes.number,
    styleIcon: PropTypes.object,
    color: PropTypes.string,
    styleInput: PropTypes.object,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

export default TextFieldComponent;