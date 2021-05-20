import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: "normal",
    fontFamily: "Poppins",
    color: '#000000'
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: '#000000',
    textAlign:'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
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
    fontWeight: '400',
    fontSize: 16,
    textAlign:'justify',
    color: '#454545',
    marginTop: 13,
    marginBottom:5,
    lineHeight : 21


    
  },
  container: {
    alignItems:'center'
  },
  cardContainer :{
      marginBottom: 10
  },
  sectionButton: {
    alignItems:'flex-end',
  },
  containerButton: {
    flexDirection: "row",
    marginHorizontal: 15,
    
  },
  btnTerm: {
      margin: 15
  }
});

export default styles;
