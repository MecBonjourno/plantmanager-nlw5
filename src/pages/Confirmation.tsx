import React from 'react';
import { SafeAreaView, Text, StyleSheet, View} from 'react-native'

import {Button} from '../components/Button'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.emoji}>
                        🤩
                    </Text>

                    <Text style={styles.title}>
                        Proooonto
                    </Text>

                    <Text style={styles.subtitle}>
                        Dale, agora vamos cuidar dessas plantas.
                    </Text>

            <View style={styles.footer}>
                <Button />
            </View>

        </View>    
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 78,
    },
    title: {
        fontSize: 38,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 46,
        marginTop: 20,
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 24,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
        paddingTop: 20,
    },
    header: {
        alignItems: 'center'
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    }
})