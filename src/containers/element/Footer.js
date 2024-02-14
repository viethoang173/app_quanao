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

function Footer({ title }) {

    const navigation = useNavigation();

    const gotoPage = (name) => {
        navigation.navigate(name);
    }

    return (
        <View style={styles.Footer}>
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.menuFlex} onPress={() => gotoPage('Home')}>
                    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M13.2483 2.75137C12.7797 2.28275 12.0199 2.28275 11.5513 2.75137L3.15128 11.1514C2.68265 11.62 2.68265 12.3798 3.15128 12.8484C3.61991 13.3171 4.3797 13.3171 4.84833 12.8484L5.1998 12.497V20.3999C5.1998 21.0626 5.73706 21.5999 6.3998 21.5999H8.7998C9.46255 21.5999 9.9998 21.0626 9.9998 20.3999V17.9999C9.9998 17.3372 10.5371 16.7999 11.1998 16.7999H13.5998C14.2625 16.7999 14.7998 17.3372 14.7998 17.9999V20.3999C14.7998 21.0626 15.3371 21.5999 15.9998 21.5999H18.3998C19.0625 21.5999 19.5998 21.0626 19.5998 20.3999V12.497L19.9513 12.8484C20.4199 13.3171 21.1797 13.3171 21.6483 12.8484C22.117 12.3798 22.117 11.62 21.6483 11.1514L13.2483 2.75137Z" fill="#666666" />
                    </Svg>
                    <Text style={styles.category}>Trang chủ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuFlex}>
                    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M10.5309 2H3.67898C2.85639 2 2.20007 2.64358 2.20007 3.44163V10.1692C2.20007 10.9587 2.85639 11.6023 3.67898 11.6023H10.5397C11.3448 11.6023 12.0011 10.9587 12.0011 10.1692V3.44163C12.0011 2.64358 11.336 2 10.5309 2Z" fill="#666666" />
                        <Path d="M10.5309 12.6147H3.67898C2.85639 12.6147 2.20007 13.2669 2.20007 14.065V20.7925C2.20007 21.582 2.85639 22.2256 3.67898 22.2256H10.5397C11.3448 22.2256 12.0011 21.582 12.0011 20.7925V14.065C12.0011 13.2669 11.336 12.6147 10.5309 12.6147Z" fill="#666666" />
                        <Path d="M21.2333 12.6147H14.3726C13.5587 12.6147 12.8937 13.2583 12.8937 14.065V20.7925C12.8937 21.582 13.55 22.2256 14.3726 22.2256H21.2333C22.0384 22.2256 22.6947 21.582 22.6947 20.7925V14.065C22.6947 13.2669 22.0384 12.6147 21.2333 12.6147Z" fill="#666666" />
                        <Path d="M21.9268 6.54782L17.8791 2.50251C17.5067 2.13035 16.8995 2.13035 16.5271 2.50251L12.4794 6.54782C12.107 6.91999 12.107 7.52679 12.4794 7.89895L16.5271 11.9443C16.8995 12.3164 17.5067 12.3164 17.8791 11.9443L21.9268 7.89895C22.2911 7.53488 22.2911 6.91999 21.9268 6.54782Z" fill="#666666" />
                    </Svg>
                    <Text style={styles.category}>Danh mục</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.menuFlex}>
                    <View style={styles.btnHome}>
                        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M14.8571 6.85714H9.14286V1.14286C9.14286 0.512 8.63086 0 8 0C7.36914 0 6.85714 0.512 6.85714 1.14286V6.85714H1.14286C0.512 6.85714 0 7.36914 0 8C0 8.63086 0.512 9.14286 1.14286 9.14286H6.85714V14.8571C6.85714 15.488 7.36914 16 8 16C8.63086 16 9.14286 15.488 9.14286 14.8571V9.14286H14.8571C15.488 9.14286 16 8.63086 16 8C16 7.36914 15.488 6.85714 14.8571 6.85714Z" fill="white" />
                        </Svg>
                    </View>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.menuFlex}>
                    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M3.60002 1.19995C2.93728 1.19995 2.40002 1.73721 2.40002 2.39995C2.40002 3.06269 2.93728 3.59995 3.60002 3.59995H5.06309L5.42977 5.06664C5.43361 5.0836 5.43782 5.10042 5.44238 5.1171L7.07106 11.6318L5.99997 12.7029C4.48805 14.2148 5.55885 16.7999 7.69702 16.7999H18C18.6627 16.7999 19.2 16.2627 19.2 15.5999C19.2 14.9372 18.6627 14.3999 18 14.3999H7.69702L8.89703 13.1999H16.8C17.2546 13.1999 17.6701 12.9431 17.8733 12.5366L21.4733 5.33661C21.6593 4.96462 21.6395 4.52285 21.4208 4.16907C21.2022 3.81529 20.8159 3.59995 20.4 3.59995H7.53696L7.1642 2.10891C7.03065 1.57471 6.55067 1.19995 6.00002 1.19995H3.60002Z" fill="#666666" />
                        <Path d="M19.2 19.8C19.2 20.7941 18.3941 21.6 17.4 21.6C16.4059 21.6 15.6 20.7941 15.6 19.8C15.6 18.8059 16.4059 18 17.4 18C18.3941 18 19.2 18.8059 19.2 19.8Z" fill="#666666" />
                        <Path d="M7.8 21.6C8.79412 21.6 9.6 20.7941 9.6 19.8C9.6 18.8059 8.79412 18 7.8 18C6.80589 18 6 18.8059 6 19.8C6 20.7941 6.80589 21.6 7.8 21.6Z" fill="#666666" />
                    </Svg>
                    <Text style={styles.category}>Giỏ hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuFlex}>
                    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M12.8 10.8001C14.7882 10.8001 16.4 9.18832 16.4 7.2001C16.4 5.21187 14.7882 3.6001 12.8 3.6001C10.8118 3.6001 9.20002 5.21187 9.20002 7.2001C9.20002 9.18832 10.8118 10.8001 12.8 10.8001Z" fill="#666666" />
                        <Path d="M4.40002 21.6001C4.40002 16.9609 8.16083 13.2001 12.8 13.2001C17.4392 13.2001 21.2 16.9609 21.2 21.6001H4.40002Z" fill="#666666" />
                    </Svg>
                    <Text style={styles.category}>Tài khoản</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Footer: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: 'center',
        borderTopColor: "#B3B3B3",
        borderTopWidth: 1,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    btnHome: {
        backgroundColor: "#2A8283",
        height: 40,
        width: 70,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    notification: {
        position: "absolute",
        width: 16,
        height: 16,
        borderRadius: 10,
        backgroundColor: "#E62F0E",
        right: 10,
        top: 10,
        justifyContent: "center",
        alignItems: "center",
        top: -8,
        right: -8
    },
    quantity: {
        fontWeight: "700",
        color: "#FFFFFF",
        fontSize: 9,

    },
    menuFlex: {
        alignItems: "center",
    },
    category: {
        fontWeight: '700'
    }
});
export default Footer;
