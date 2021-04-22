import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

import {getStatusBarHeight} from 'react-native-iphone-x-helper'

import userImg from '../assets/AA.png'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Olá,</Text>
                <Text style={styles.username}>User</Text>
            </View>
            <Image source={userImg} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        // padding: 20,
    },
    title: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    username: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
    },
})