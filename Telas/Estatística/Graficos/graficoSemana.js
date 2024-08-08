import { StyleSheet, Text, View, Animated } from 'react-native';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from "victory-native"
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
const data = {
    "1":[
      {
        id: 'Seg',
        label: '12,50',
        value: 12.50,
      },
    ],
    "2":[
      {
        id: 'Ter',
        label: '10,42',
        value: 10.42,
      },
    ],
    "3":[
      {
        id: 'Qua',
        label: '13,54',
        value: 13.54,
      },
    ],
    "4":[
      {
        id: 'Qui',
        label: '20,48',
        value: 20.48,
      },
    ],
    "5":[
      {
        id: 'Sex',
        label: ' 17.5',
        value: 17.5,
      },
    ],
    "6":[
      {
        id: 'Sab',
        label: '18.4',
        value: 18.4,
      }
    ],
    "7":[
        {
          id: 'Dom',
          label: '15.6',
          value: 15.6,
        }
    ]   
  };
  const labelStyles = {
    fontFamily: 'Seravek',
    opacity: 0.5,
  };
export default function GraficoSemana(){
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
        <View style={styles.container}>
            <View style={styles.titleGroup}>
                <Text style={styles.title}>
                    Essa semana
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
            <VictoryChart width={390} padding={{top: 50, left: 40, right:58, bottom: 80}}>
            <VictoryGroup 
              animate={{
                easing: "bounce"
              }}
              
              >
            <VictoryBar style={{
                data:{
                  fill: "#FFC01E",
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[1]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: '#104972',
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[2]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: "#FFC01E",
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[3]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: '#104972',
                  opacity: 0.75,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[4]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: "#FFC01E",
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[5]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: '#104972',
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[6]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: "#FFC01E",
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[7]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
            </VictoryGroup>
            
             <VictoryAxis crossAxis
              standalone={true}
              fixLabelOverlap={true}
              style={{
                axis: {strokeWidth: 0 },
                tickLabels: labelStyles,
              }}
           ></VictoryAxis>
           </VictoryChart>
        </View>


    );
}

const styles= StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: '#FFF',
        borderRadius: 30,
        width: 370,
        height: 320,
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
})