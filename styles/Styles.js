import { StatusBar, StyleSheet } from "react-native";

const MainStyle = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight + 5,
      flex: 1,
      backgroundColor: '#c9880f',
    },
    logo:{
      width: 40,
      height: 40
    },
    header:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fbdda7'
    },
    headerBox:{ 
    },
    mainView:{
      backgroundColor: '#b05f02',
      borderTopLeftRadius: 70,
      borderTopRightRadius: 70,
      borderWidth: 2
    }
  });

  export {MainStyle};