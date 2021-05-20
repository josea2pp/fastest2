import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import TextFieldComponent from '../../Components/TextFieldComponent';
import ButtonComponent from '../../Components/ButtonComponent';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


function TermsView(props) {

    function handleGoToRegister() {
        props.navigation.navigate('Register');
    }

    return (
        <LinearGradient colors={['#ABEBED', '#B4D3EF', '#C6C5ED', '#E8BFE9', '#F8D7E2', '#FFF4E0']} style={styles.linearGradient}>
            <ScrollView >
                <View style={styles.cardContainer}>
                    <Card >
                        <Card.Title style={styles.titleText}>Terms of Service</Card.Title>
                        <Card.FeaturedTitle style={styles.subtitleText}>Important</Card.FeaturedTitle>
                        <View style={styles.container}>
                            <Text style={styles.baseText}>

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem

                            </Text>

                        </View>
                        <Card.Divider />
                        <View style={styles.sectionButton}>
                            <View style={styles.containerButton}>
                                <Button
                                    title="Disagree"
                                    type="clear"
                                    buttonStyle={styles.btnTerm}
                                    onPress={()=>{}}
                                />
                                <Button
                                    title="Agree"
                                    type="clear"
                                    buttonStyle={styles.btnTerm}
                                    onPress={()=>{}}
                                />
                            </View>
                        </View>



                    </Card>
                </View>
            </ScrollView>
        </LinearGradient>
    );

}
export default TermsView;
