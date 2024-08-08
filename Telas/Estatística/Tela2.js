
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { useEffect, useState } from 'react';
import GraficoOntem from './Graficos/graficoOntem';
import GraficoSemana from './Graficos/graficoSemana';
import GraficoMes from './Graficos/graficoMes';

export default function Tela2() {
      return (
        <ScrollView bounces={false}>
          <View style={styles.container}>
          <GraficoMes/>
            <GraficoOntem/>
            <GraficoSemana/>
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
        height: 1100,
        display: 'flex',
        alignItems: 'center',
      },
  });