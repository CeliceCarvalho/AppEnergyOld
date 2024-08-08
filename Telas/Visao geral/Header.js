import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import{ Feather } from '@expo/vector-icons';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
}from '@expo-google-fonts/roboto';


const statusBarTamanho = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 90;

export default function Header() {
  const [fontLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
  });
  if(!fontLoaded){
    return null;
  }
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text style={styles.nomeusuario}>Olá, Celice</Text>
            <Text style={styles.subtitle}>Confira as informações do seu consumo</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
              <Feather name="user" size={35} color="#FFF"/>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    backgroundColor: '#104972',
    paddingTop: statusBarTamanho, 
    flexDirection: "row",
    paddingStart: 35,
    paddingEnd: 30,
    paddingBottom: 40,
  },
  content:{
    flex: 1,
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

  }
});