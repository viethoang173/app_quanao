/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

// import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    FlatList,
    TextInput,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';

function HeaderHome({ title }) {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>


            <View style={styles.backPage}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M2.94731 5.37834L6.40993 1.84326C6.56431 1.68572 6.56274 1.43367 6.40678 1.27613L5.78767 0.657018C5.62856 0.499483 5.37335 0.499483 5.21581 0.658593L0.809558 5.09321C0.73079 5.17197 0.691406 5.27437 0.691406 5.37834C0.691406 5.48232 0.73079 5.58471 0.809558 5.66348L5.21581 10.0981C5.37335 10.2572 5.62856 10.2572 5.78767 10.0997L6.40678 9.48056C6.56274 9.32302 6.56431 9.07097 6.40993 8.91343L2.94731 5.37834Z" fill="white" />
                    </Svg>
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}>{title}</Text>
        </View >
    );
};
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingVertical: 11,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#076D6F",
    },

    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: "center",
        color: 'white',
    },
    backPage: {
        position: 'absolute',
        left: 16,
        top: 18,
    },
    xxx: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default HeaderHome;
