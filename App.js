import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Routes } from './Telas/TabBar/routes';
import { NavigationContainer } from '@react-navigation/native';
import{ AntDesign } from '@expo/vector-icons';

const statusBarTamanho = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 90;
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
}from '@expo-google-fonts/roboto';

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
  });
  if(!fontLoaded){
    return null;
  }
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.nomeusuario}>Olá, Celice</Text>
            <Text style={styles.subtitle}>Confira as informações do seu consumo</Text>
          </View>
         <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <AntDesign name="user" size={35} color="#FFF"/>
        </TouchableOpacity>
        </View>
    </View>
    <View style={styles.espaco}>

    </View>
    <Routes></Routes>
    </NavigationContainer>    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#104972',
    paddingTop: statusBarTamanho, 
    flexDirection: "row",
    paddingStart: 35,
    paddingEnd: 30,
    paddingBottom:60,
  },
  content:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nomeusuario:{
    fontSize: 28,
    color: '#FFF',
    fontFamily: "Roboto_400Regular",
  },
  subtitle:{
    marginTop: 5,
    marginStart: 2,
    fontFamily: "Roboto_100Thin",
    color: '#FFF',
  },
  espaco:{
      padding: 30,
      borderRadius:30,
      position:'absolute',
      backgroundColor:'#EFF7FE',
      opacity:0.9,
      width: 414,
      marginTop: 185,
  }
});
