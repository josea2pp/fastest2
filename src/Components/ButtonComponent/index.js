import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import PropTypes from 'prop-types';
import styles from "./styles";


function ButtonComponent(props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                disabled={props.disabled}
                style={props.styleButton}
                onPress={props.onPress}
            >
                <Text style={props.styleTitle}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

ButtonComponent.propTypes = {
    styleButton: PropTypes.object,
    onPress: PropTypes.func,
    styleTitle: PropTypes.object,
    title: PropTypes.string,
    disabled: PropTypes.bool
};


export default ButtonComponent;