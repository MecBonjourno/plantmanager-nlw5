import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native'
import colors from '../styles/colors';


import {Header} from '../components/Header'
import fonts from '../styles/fonts';
import { EnviromentButton } from '../components/EnviromentButton';

export function PlantSelector(){

    useEffect(() => {},[])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>está sua plantinha.</Text>
            </View>
            <View>
                <FlatList 
                 data={[1,2,3,4,5]} 
                 renderItem={({item})=>(
                  <EnviromentButton title="Cozinha" active/>
                 )}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 contentContainerStyle={styles.environmentList}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 24,
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop:15
    },
    subtitle: {
        fontSize: 24,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
    }
})