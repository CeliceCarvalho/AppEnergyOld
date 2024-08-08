import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_700Bold,
}from '@expo-google-fonts/roboto';

export default function ButtonStyleEstatistica({focused, size, color}){
    const [fontLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_400Regular,
        Roboto_700Bold,
    })
    if(!fontLoaded){
        return null;
    }
    return(
            <View style={[styles.menu, { backgroundColor: focused ? '#FFC01E' : '#FFF', opacity: focused ? 1 : 0.2}]} on>
                <Text style={styles.title}>Estatística</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    menu:{
        width: 150,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 30,
        height:50,
        marginTop:-38,
    },
    title:{
        fontSize: 16,
        fontFamily: "Roboto_700Bold",
    }
})
