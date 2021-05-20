import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },
    SectionStyleInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
        borderColor: '#9f9f9f',
        height: 45,
        width:300,
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: 'white'
    },
    buttonNext: {
        alignItems: "center",
        backgroundColor: "#ABEBED",
        marginTop: 10,
        borderRadius: 12,
        height: 50,
        width: 300

    },
    textButton: {
        position: 'absolute',
        height: 24,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
        color: '#1B7C80',
        marginTop: 13,
        alignItems: 'center'
    },
    iconInput:{
        marginLeft: 10
    },
    inputStyle: {
        flex: 1,
        paddingLeft: 10
    },
});

export default styles;
