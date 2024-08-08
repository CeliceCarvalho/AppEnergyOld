import { ScrollView, StyleSheet, Text, View, Animated } from 'react-native';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryLine, VictoryTheme} from "victory-native"
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_700Bold,
}from '@expo-google-fonts/roboto';
import {
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_400Regular_Italic,
}from '@expo-google-fonts/open-sans'
const data = [
  { dia: '1', consumo: 0.5},{ dia: '2', consumo: 2.5},{ dia: '3', consumo: 3.5},{ dia: '4', consumo: 4.5},{ dia: '5', consumo: 5.5},
  { dia: '6', consumo: 6.5},{ dia: '7', consumo: 8.5},{ dia: '8', consumo: 9.5},{ dia: '9', consumo: 12.50},{ dia: '10', consumo: 13.5},
  { dia: '11', consumo: 20.50},{ dia: '12', consumo: 24.40},{ dia: '13', consumo: 26.50},{ dia: '14', consumo: 30.45},{ dia: '15', consumo: 35.50},
  { dia: '16', consumo: 0},{ dia: '17', consumo: 0},{ dia: '18', consumo: 0},{ dia: '19', consumo: 0},{ dia: '20', consumo: 0},
  { dia: '21', consumo: 0},{ dia: '22', consumo: 0},{ dia: '23', consumo: 0},{ dia: '24', consumo: 0},{ dia: '25', consumo: 0},
  { dia: '26', consumo: 0},{ dia: '27', consumo: 0},{ dia: '28', consumo: 0},{ dia: '29', consumo: 0},{ dia: '30', consumo: 0},
];
const dataEstimativa = [
  { dia: '1', consumo: 0.5},{ dia: '2', consumo: 2.5},{ dia: '3', consumo: 3.5},{ dia: '4', consumo: 4.5},{ dia: '5', consumo: 5.5},
  { dia: '6', consumo: 6.5},{ dia: '7', consumo: 8.5},{ dia: '8', consumo: 9.5},{ dia: '9', consumo: 12.50},{ dia: '10', consumo: 13.5},
  { dia: '11', consumo: 20.50},{ dia: '12', consumo: 24.40},{ dia: '13', consumo: 26.50},{ dia: '14', consumo: 30.45},{ dia: '15', consumo: 35.50},
  { dia: '16', consumo: 40.50},{ dia: '17', consumo: 46.50},{ dia: '18', consumo: 49.50},{ dia: '19', consumo: 52.50},{ dia: '20', consumo: 60.50},
  { dia: '21', consumo: 65.50},{ dia: '22', consumo: 69.50},{ dia: '23', consumo: 70.50},{ dia: '24', consumo: 85.50},{ dia: '25', consumo: 90.0},
  { dia: '26', consumo: 93.50},{ dia: '27', consumo: 95.50},{ dia: '28', consumo: 98.50},{ dia: '29', consumo: 99.50},{ dia: '30', consumo: 100.0},
];

const labelStyles = {
    fontFamily: 'Seravek',
    opacity: 0.6,
    fontSize: 14,
  };
export default function GraficoMes(){
    const [fontLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_400Regular,
        Roboto_700Bold,
        OpenSans_300Light,
        OpenSans_400Regular,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
        OpenSans_400Regular_Italic,
      });
      if(!fontLoaded){
        return null;
      }
    return (
            <View style={styles.content1}>
            <View style={styles.titleGroup}>
            <Text style={styles.title}>
              Esse mês
            </Text>
            <View style={styles.subtitleGroup}>
             <Text style={styles.subtitle}>
                Dia  /
              </Text>
              <Text style={styles.subtitle}>
                Consumo (R$)
              </Text>
            </View>
            </View>
            <VictoryChart padding={{top: 30, left: 60, right:70, bottom: 170}} domain={{x:[0,30], y:[1,100]}} theme={VictoryTheme.material}>
                <VictoryArea
                    data={dataEstimativa}
                   
                    y='consumo'
                    style={{
                        data:{
                            fill: '#EFF7FE',
                            opacity: 0.7,
                            stroke: '#104972',
                            strokeWidth: 0.8,
                        }
                    }}
                />
                <VictoryArea
                    data={data}
                   
                    y='consumo'
                    style={{
                        data:{
                            fill:'#FBE9B8',
                            opacity: 0.7,
                            stroke: '#FFC01E',
                            strokeWidth: 0.8,
                        }
                    }}
                />
                <VictoryAxis dependentAxis
                    style={{
                        axis: {
                            strokeWidth:0,
                        },
                        tickLabels: labelStyles
                    }}
                />   
                <VictoryAxis crossAxis
                style={{
                    axis: {
                        strokeWidth:0,
                    },
                    tickLabels: labelStyles
                }}
                tickValues={[5,10,15,20,25,30]}
              />   
            </VictoryChart>
        </View>
    );
}

const styles = StyleSheet.create({
    content1:{
      marginTop: 90,
      backgroundColor: '#FFF',
      borderRadius: 30,
      width: 370,
      height: 280,
      shadowColor: 'black',
      shadowOffset:{width:3, height:3},
      shadowOpacity: 0.3,
    },
    title:{
      fontFamily: 'Roboto_700Bold',
      fontSize: 20,
      marginStart: 30,
      opacity:0.9,
    },
    titleGroup:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    subtitleGroup:{
      display: 'flex',
      flexDirection: 'row',
      marginEnd: 30,
      gap: 5,
      alignItems: 'center',
    },
    subtitle:{
      fontFamily: "OpenSans_300Light",
      fontSize: 12,
    },
    dias:{
        display: 'flex',
        flexDirection: 'row',
        gap: 36,
        position: 'absolute',
        marginTop: 230,
        marginStart: 85,
    },
    dia:{
        fontSize: 12,
        fontFamily: 'Seravek',
        opacity: 0.5,
    }
});