import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    fontSize: 36,
    fontWeight: "normal",
    fontFamily: "Poppins",
    color: '#454545',
    alignItems:'center',

  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  logo: {
    width: 250,
    height: 60,
    marginTop: 80,

  },
  innerText: {
    marginTop: 20,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    color: '#454545'
  },
  icon: {
    marginRight:10
  },
  iconStyle:{
    marginTop:10
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10
  },
  container: {
    flex: 1,
    alignItems:'center'
  },
  containerText: {
    alignItems:'flex-end'
  },
  containerIcon: {
    marginTop : 30,
    alignItems:'center'
  },
  buttonLogin: {
    alignItems: "center",
    backgroundColor: "#ABEBED",
    marginTop: 20,
    borderRadius: 10,
    height: 50,
    width: 350

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
  SectionStylePassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: .5,
    borderColor: '#9f9f9f',
    height: 45,
    borderRadius: 5,
    marginTop: 20
  },
  icon: {
    marginRight:10
  },
  iconInput:{
    marginLeft: 10
  },
  error: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#FF0202',
    marginTop: 13,
    alignItems: 'center'
  }
});

export default styles;
