import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import GraficoMetas from './graficoMetas';

export default function Tela1() {
  return (
    <ScrollView bounces={false}>
    <View style={styles.container}>
          <GraficoMetas/>
      </View>     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: -10,
    zIndex: 1000,
    backgroundColor:'#D8E3EC',
    opacity:0.9,
    height: 700,
    display: 'flex',
    alignItems: 'center',
  },
});
