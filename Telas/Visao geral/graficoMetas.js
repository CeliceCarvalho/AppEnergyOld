import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, ScrollView } from 'react-native';
import {VictoryPie} from 'victory-native'
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

let consumoHoje = 20.45
let consumoHojeString = consumoHoje.toString().replace(".",",");
let meta = 90
let porcentagem = consumoHoje*100/meta
let estimativa = 100.30

const data=[
    {x: 'n', y: 100-porcentagem},
    {x: 'p', y: porcentagem},
];

export default function GraficoMetas(){
    
    let dia = new Date().getDate()
    if (dia<10){
        dia = `0${dia}`
    };
    let mes = new Date().getMonth() + 1
    switch (mes){
        case 1:
            mes = 'Janeiro';
            break;
        case 2:
            mes = 'Fevereiro';
            break;
        case 3:
            mes = 'Março';
            break;
        case 4:
            mes = 'Abril';
            break;
        case 5:
            mes = 'Maio';
            break;
        case 6:
            mes = 'Junho';
            break;
        case 7:
            mes = 'Julho';
            break;
        case 8:
            mes = 'Agosto';
            break;
        case 9:
            mes = 'Setembro';
            break;
        case 10:
            mes = 'Outubro';
            break;
        case 11:
            mes = 'Novembro';
            break;
        case 12:
            mes = 'Dezembro';
            break;
    }
    const [fontLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_400Regular,
        Roboto_700Bold,
        OpenSans_300Light,
        OpenSans_400Regular,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
        OpenSans_400Regular_Italic,
    })
    if(!fontLoaded){
        return null;
    }
    return(
        <View style={styles.container}>
            <View style={styles.fundoTitle}>
                <Text style={styles.title}>
                    {dia} de {mes}, hoje
                </Text>
            </View>
            <VictoryPie
                colorScale={['#FFF','#FFBD14']}
                innerRadius={150}
                cornerRadius={20}
                data = {data}
                style={{
                    labels:{
                        fill: '#D8E3EC'
                    },
                }}
                padding={{top: 0,right: 50,left: 50, bottom: 25}}
                
            />
            <View style={styles.consumoHojeView}>
                <Text style={styles.simbolo}>
                    R$:
                </Text>
                <Text style={styles.consumoHoje}>
                    {consumoHojeString}
                </Text>
                <Text style={styles.estimativa}>
                    Estimativa: {estimativa}
                </Text>
            </View>
            <View style={styles.legendaView}>
                <View style={styles.legendaGroup}>
                    <View style={styles.legendaCor1}/>
                    <Text style={styles.legendaText}>
                        Consumido
                    </Text>
                </View>
                <View style={styles.legendaGroup}>
                    <View style={styles.legendaCor2}/>
                    <Text style={styles.legendaText}>
                        Disponível
                    </Text>
                </View>
            </View>
            <View style={styles.group}>
                <View style={styles.percentView}>
                    
                    <Text style={styles.percent}>
                        {porcentagem.toFixed(0)}
                    </Text>
                    <Text style={styles.percentSimbol}>
                        %
                    </Text>
                </View>
                <View style={styles.metaView}>
                    <Text style={styles.metaText}>
                        Meta (R$):
                    </Text>
                    <Text style={styles.metaValue}>
                        {meta}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      marginTop: 50,
      width: 370,
      height: 100,
      shadowColor: 'black',
      shadowOffset:{width:3, height:3},
      shadowOpacity: 0.3,
      display: 'flex',
      alignItems: 'center',
    },
    fundoTitle:{
        marginTop: 40,
        backgroundColor: '#FFF',
        width: 290,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderColor: '#ADD4F1',
        borderWidth: 1,
    },
    title:{
        fontFamily: 'OpenSans_300Light',
        fontSize: 20,
    },
    consumoHojeView:{
        marginTop: -310,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#104972',
        borderRadius: 120,
        height: 230,
        width: 230,
        borderColor: 'white',
        borderWidth:2,
    },
    simbolo:{
        fontFamily: 'OpenSans_300Light',
        fontSize: 15,
        color: 'white',
        marginTop: -8,
    },
    consumoHoje:{
        color: 'white',
        fontSize: 55,
        fontFamily: 'OpenSans_700Bold'
    },
    estimativa:{
        fontFamily: 'OpenSans_400Regular_Italic',
        color: "white",
    },
    estimativaView:{
        marginTop: 150,
    },
    group:{
        display: 'flex',
        flexDirection: 'row',
        gap: 25,
        marginTop: 30,
    },
    percentView:{
        backgroundColor: '#FFBD14',
        width: 150,
        height: 100,
        borderRadius:30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    percentText:{
        color: 'white',
        fontFamily: "OpenSans_400Regular",
        fontSize: 12,
    },  
    percent:{
        fontFamily: "OpenSans_700Bold",
        opacity: 0.9,
        fontSize: 50,
    },
    percentSimbol:{
        fontSize: 25,
        fontFamily:'OpenSans_700Bold',
        marginTop: 15,
        opacity: 0.9,
    },
    metaView:{
        backgroundColor: '#FFBD14',
        width: 150,
        height: 100,
        borderRadius:30,
        display: 'flex',
    },
    metaText:{
        fontFamily: 'OpenSans_400Regular',
        marginTop: 10,
        marginStart: 20,
    },
    metaValue:{
        fontFamily: 'OpenSans_700Bold',
        fontSize: 50,
        marginStart: 50,
        marginTop: -10,
    },
    legendaView:{
        marginTop: 70,
        display:'flex',
        flexDirection: 'row',
        gap: 20,
    },
    legendaGroup:{
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap:10,
    },
    legendaText:{
        fontFamily: "OpenSans_400Regular",
        fontSize: 13,
    },
    legendaCor1:{
        backgroundColor: '#FFBD14',
        width: 25,
        height: 12,
        borderRadius: 10,
    },
    legendaCor2:{
        backgroundColor: '#FFF',
        width: 25,
        height: 12,
        borderRadius: 10,
    },
})