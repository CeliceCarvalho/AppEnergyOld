import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Tela1 from "../Visao geral/Tela1";
import Tela2 from "../Estatística/Tela2";
import { StyleSheet, Text, View } from 'react-native';
import ButtonStyleEstatistica from "./buttonStyleEstatistica";
import ButtonStyleVisao from "./buttonStyleVisao";

const Tab = createMaterialTopTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#FFC01E',
                tabBarStyle:{
                    position: 'absolute',
                    borderRadius: 30,
                    left: 30,
                    right:30,
                    height: 100,
                    paddingBottom:0,
                    height:50,  
                },
                tabBarIndicatorStyle:{
                    backgroundColor: '#FFC01E',
                    height: 50,
                    borderRadius: 30,
                },
                tabBarAndroidRipple: { borderless: false },
            }}
        >
            <Tab.Screen name= "Visão Geral" component={Tela1}
            options={{ 
                tabBarLabel:({color, size, focused}) => (
                    <ButtonStyleVisao focused={focused}/>
                ),
                tabBarIcon: () => null,
            }}
            />
            <Tab.Screen name= "Estatística" component={Tela2}
            options={{
                tabBarLabel:({color, size, focused}) => (
                    <ButtonStyleEstatistica focused={focused}/>
                ),
                tabBarIcon: () => null,
            }}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
  
});
