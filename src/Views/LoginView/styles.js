import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  titleText: {
    marginTop: 50,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: '#454545'
  },
  titlePassword: {
    marginTop: 25,
    marginLeft: 233,
    fontSize: 12,
    fontWeight: "normal",
    fontFamily: "Poppins",
    color: '#454545'
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
    marginTop: 80
  },

  SectionStyleEmail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: .5,
    borderColor: '#9f9f9f',
    height: 45,
    borderRadius: 5,
    marginTop: 30
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
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'flex-start',
    opacity: 0.7
  },
  ImageStyleShow: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'flex-end',
  },
  buttonLogin: {
    alignItems: "center",
    backgroundColor: "#ABEBED",
    marginTop: 10,
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
  baseText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginTop: 130
  },
  innerText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#000000'
  },
  icon: {
    marginRight:10
  },
  iconInput:{
    marginLeft: 10
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10
  },
  container: {
    flex: 1,
    alignItems:'center'
  }
  
});

export default styles;
