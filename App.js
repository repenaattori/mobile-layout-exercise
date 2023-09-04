import { StatusBar } from 'expo-status-bar';
import { StatusBar as SB, Button, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, TextInput, Image } from 'react-native';
import Logo from './assets/coffee.png';
import {MainStyle} from './styles/Styles'

export default function App() {

  return (
    <View style={MainStyle.container}>
      <View style={MainStyle.headerBox}>
        <Image style={MainStyle.logo} source={Logo }/>
        <Text style={MainStyle.header}>WELCOME</Text>
        <Image style={MainStyle.logo} source={Logo }/>
      </View>
      <View style={MainStyle.mainView}>
        <Text style={MainStyle.header}>Upper header</Text>
        <Text style={MainStyle.header}>Middle header</Text>
        <Text style={MainStyle.header}>Bottom header</Text>
      </View>
     
      <StatusBar style='auto'></StatusBar>
    </View>
  );
}   