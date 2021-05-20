import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  logo:{
    width: 250,
    height: 60,
    marginTop: 120,
    marginLeft: 50
  },
  subText: {
    fontSize: 20,
    color: '#454545',
    textAlign: 'center',
    marginTop: 50
  },
  text: {
    fontSize: 17,
    color: '#454545',
    textAlign: 'left',
    marginTop: 50
  },
  btnBrand:{
    backgroundColor: '#ACE9ED',
    textAlign: 'center',
    marginTop: 10,
    borderStyle: 'solid',
    borderRadius: 10,
    height: 50,
    elevation: 7
  },
  textBrand: {
    color: '#1B7C80',
    textAlign: 'center',
    marginTop: 20
  },
  btnCreator:{
    backgroundColor: '#F8D7E2',
    textAlign: 'center',
    marginTop: 15,
    borderStyle: 'solid',
    borderRadius: 10,
    height: 55,
    elevation: 7
  },
  textCreator: {
    color: '#8D2B4C',
    textAlign: 'center',
    marginTop: 20
  },
  textQuestion: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
  },
  loginHere: {
    color: '#1fabb2',
    fontWeight: "bold"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

export default styles;
