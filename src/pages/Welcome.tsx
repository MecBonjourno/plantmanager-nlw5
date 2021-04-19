import React, {useState} from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import  {Button} from '../components/Button'

import watering from '../assets/watering.png'
import colors from '../styles/colors';

export function Welcome(){
    const [visible, setVisible] = useState(false)

    function handleVisibility(){
        setVisible(true)
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome to Another Project {'\n'} by MecBonjourno</Text>
            {visible && <Image source={watering} style={styles.image} />}
            <Text style={styles.subTitle}>É mais um app que eu faço, pra praticar, pra estudar, pra melhorar. É isto dnv. </Text>
            <Button title="Imagem" onPress={handleVisibility}/>
        </SafeAreaView>
     )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
    },
    subTitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    image: {
        width: 292,
        height: 284,
    },
    buttonText: {
        color: colors.white,
        fontSize: 24,
    }
})