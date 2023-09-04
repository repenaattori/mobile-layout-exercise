import { StatusBar } from 'expo-status-bar';
import { StatusBar as SB, Button, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, TextInput, Image } from 'react-native';
import Logo from './assets/coffee.png';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Image style={styles.logo} source={Logo }/>
        <Text style={styles.header}>WELCOME</Text>
        <Image style={styles.logo} source={Logo }/>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.header}>Upper header</Text>
        <Text style={styles.header}>Middle header</Text>
        <Text style={styles.header}>Bottom header</Text>
      </View>
     
      <StatusBar style='auto'></StatusBar>
    </View>
  );
}   

const styles = StyleSheet.create({
  container: {
    paddingTop: SB.currentHeight + 5,
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
