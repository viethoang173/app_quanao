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
        <View style={styles.headerHome}>
            <View style={styles.headerTop}>
                <Image style={styles.imgLogo} source={require('../../../asset/images/logo.png')} />
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M3.60002 1.20001C2.93728 1.20001 2.40002 1.73727 2.40002 2.40001C2.40002 3.06275 2.93728 3.60001 3.60002 3.60001H5.06309L5.42977 5.0667C5.43361 5.08366 5.43782 5.10048 5.44238 5.11716L7.07106 11.6319L5.99997 12.703C4.48805 14.2149 5.55885 16.8 7.69702 16.8H18C18.6627 16.8 19.2 16.2628 19.2 15.6C19.2 14.9373 18.6627 14.4 18 14.4L7.69702 14.4L8.89702 13.2H16.8C17.2546 13.2 17.6701 12.9432 17.8733 12.5367L21.4733 5.33667C21.6593 4.96468 21.6395 4.52291 21.4208 4.16913C21.2022 3.81535 20.8159 3.60001 20.4 3.60001H7.53696L7.1642 2.10897C7.03065 1.57477 6.55067 1.20001 6.00002 1.20001H3.60002Z" fill="white" />
                    <Path d="M19.2 19.8C19.2 20.7941 18.3941 21.6 17.4 21.6C16.4059 21.6 15.6 20.7941 15.6 19.8C15.6 18.8059 16.4059 18 17.4 18C18.3941 18 19.2 18.8059 19.2 19.8Z" fill="white" />
                    <Path d="M7.80002 21.6C8.79414 21.6 9.60002 20.7941 9.60002 19.8C9.60002 18.8059 8.79414 18 7.80002 18C6.80591 18 6.00002 18.8059 6.00002 19.8C6.00002 20.7941 6.80591 21.6 7.80002 21.6Z" fill="white" />
                </Svg>
            </View>
            <View>
                <TextInput style={styles.searchHome}></TextInput>
                <TouchableOpacity style={styles.buttonSearch}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#2125BB" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerHome: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: 'rgba(24, 28, 179, 1)',
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom: 8,
    },
    searchHome: {
        backgroundColor: '#fff',
        height: 40,
        paddingLeft: 12,
        paddingRight: 77,
        paddingVertical: 6,
        borderRadius: 4,
        textAlignVertical: 'center',
    },
    buttonSearch: {
        backgroundColor: '#D8DCEC',
        position: 'absolute',
        right: 0,
        height: 40,
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    }
});
export default HeaderHome;
