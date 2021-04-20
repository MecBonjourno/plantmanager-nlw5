import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../components/Button'

export function UserId(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.emoji}>
                    😁
                    </Text>
                    <Text style={styles.title}>Como podemos chamar você? </Text>
                    <TextInput style={styles.input}/>
                </View>
                <Button />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 38,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 46,
        marginTop: 20,
    }
})