/*
    File demo code
*/
import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    // StatusBar,
    // StyleSheet,
    // FlatList,
    TextInput,
    Text,
    View,
    Image,
    TouchableOpacity,
    // Alert,
    Modal,
    ImageBackground,
} from 'react-native';

import Svg, { Path } from 'react-native-svg';
import Swiper from 'react-native-swiper';

// import { notifications } from "react-native-firebase-push-notifications"
// import NetInfo from "@react-native-community/netinfo";

import { connect } from 'react-redux';
// import { withNavigation } from '@react-navigation/native';
import { DOMAIN } from '../../../constants/config';

import styles from './styles.js';
import { get_home_products, get_category_products } from '../../services/productService';
import { get_all_color } from '../../services/colorService';
import { get_all_size } from '../../services/sizeService';
import { get_list_cart, get_number_cart } from '../../services/cartService';
import { get_all_supplier } from '../../services/supplierService';
import { get_category } from '../../services/categoryService';
import { get_hang } from '../../services/hangService';
import productAction from '../../actions/productAction';
import colorAction from '../../actions/colorAction';
import sizeAction from '../../actions/sizeAction';
import customerAction from '../../actions/customerAction';
import cartAction from '../../actions/cartAction';
import supplierAction from '../../actions/supplierAction';
import hangAction from '../../actions/hangAction';
import categoryAction from '../../actions/categoryAction';
// import image from '../../../asset/images/NoImageProduct.png'


//crm
import Header from '../element/Header';
import Footer from '../element/Footer';

class ThongKeChung extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            modalVisible: false,
        }
    }

    render() {
        const navigation = this.props.navigation;
        const data = this.state.data;
        const { type, typeCase, cartData } = this.state;
        const dataSearch = this.state.dataSearch;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Header title='Thống kê chung' />
                    <ScrollView>
                        <View style={styles.boxTotal}>
                            <View style={styles.flexRow}>
                                <Image style={styles.imgCoin} source={require('../../../asset/images/coin.png')} />
                                <View style={styles.boxTxt}>
                                    <Text style={styles.txtTotal}>Tổng thu trong tháng</Text>
                                    <Text style={styles.numTotal}>401.200.000.000</Text>
                                </View>
                            </View>
                            <Image style={styles.bgCoin} source={require('../../../asset/images/bg-coin.png')} />
                        </View>
                        <View style={styles.flexThongKe}>
                            <ImageBackground source={require('../../../asset/images/tong-chi.png')} resizeMode="cover" style={styles.image}>
                                <View style={styles.boxThongke}>
                                    <Text style={styles.textTongchi}>Tổng chi trong tháng</Text>
                                    <Text style={styles.numTongChi}>401.200.000.000</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground source={require('../../../asset/images/loi-nhuan.png')} resizeMode="cover" style={styles.image}>
                                <View style={styles.boxThongke}>
                                    <Text style={styles.textLoiNhuan}>Lợi nhuận trong tháng</Text>
                                    <Text style={styles.numLoiNhuan}>200.000.000</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.flexColumnItem}>
                            <TouchableOpacity>
                                <View style={styles.borderBox}>
                                    <View style={[styles.flexRow, styles.dropdown]}>
                                        <View style={styles.flexRow}>
                                            <Svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M13.5963 1.25754L10.9652 0L0 5.28538V17.0905L10.9977 22.1949L22 17.0858V5.27146L13.5963 1.25754ZM14.2831 2.40835L16.5104 3.48492L7.32715 7.84687L6.60325 7.51276L4.88167 6.6775L14.2831 2.40835ZM6.63573 8.76566V12.051L5.93039 10.6218C5.85615 10.4687 5.70766 10.3619 5.5406 10.3295C5.50812 10.3248 5.48028 10.3202 5.4478 10.3202C5.30858 10.3202 5.17401 10.3712 5.07657 10.4687L4.33875 11.1833L4.32483 7.72622L6.63573 8.76566ZM10.9652 0.821346L13.4292 2L3.95824 6.45012C3.91183 6.46404 3.87007 6.4826 3.82831 6.51044L3.82367 6.51508L3.71694 6.56613L1.40603 5.56381L10.9652 0.821346ZM10.5615 21.0348L0.737819 16.6125V6.12529L3.58237 7.39675L3.59629 11.6659C3.59629 11.8794 3.72622 12.0742 3.92575 12.1578C4.12529 12.2413 4.35267 12.1995 4.5058 12.051L5.38747 11.2019L6.35731 13.1647C6.45012 13.3503 6.63573 13.4664 6.83527 13.4664C6.87703 13.4664 6.91879 13.4617 6.96056 13.4524C7.2065 13.3968 7.37355 13.1787 7.37355 12.9281V9.09513L10.5568 10.5197V21.0348H10.5615ZM10.9977 9.83759L7.89327 8.5522L17.3736 3.88399L20.6729 5.46172L10.9977 9.83759ZM21.2575 16.6125L11.4339 21.0348V10.5197L21.2575 6.12529V16.6125Z" fill="#333333" />
                                            </Svg>
                                            <Text style={styles.txtTT}>Thống kê đơn hàng</Text>
                                        </View>
                                        <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z" fill="#333333" />
                                        </Svg>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.borderBox}>
                                    <View style={[styles.flexRow, styles.dropdown]}>
                                        <View style={styles.flexRow}>
                                            <Svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <Path d="M21.0588 2.29492H2.94118C1.86909 2.29492 1 3.16402 1 4.2361V19.7655C1 20.8376 1.86909 21.7067 2.94118 21.7067H21.0588C22.1309 21.7067 23 20.8376 23 19.7655V4.2361C23 3.16402 22.1309 2.29492 21.0588 2.29492Z" stroke="#333333" />
                                                <Path d="M2.16406 7.4707H22.7405" stroke="#333333" stroke-linecap="square" />
                                                <Path d="M6.30519 1.06471C6.30519 1.02897 6.27622 1 6.24049 1C6.20475 1 6.17578 1.02897 6.17578 1.06471V3.52353C6.17578 3.55927 6.20475 3.58824 6.24049 3.58824C6.27622 3.58824 6.30519 3.55927 6.30519 3.52353V1.06471Z" stroke="#333333" />
                                                <Path d="M17.9536 1.06471C17.9536 1.02897 17.9247 1 17.8889 1C17.8532 1 17.8242 1.02897 17.8242 1.06471V3.52353C17.8242 3.55927 17.8532 3.58824 17.8889 3.58824C17.9247 3.58824 17.9536 3.55927 17.9536 3.52353V1.06471Z" stroke="#333333" />
                                                <Path d="M6.43575 10.7051H5.91811C5.34633 10.7051 4.88281 11.1686 4.88281 11.7404V12.258C4.88281 12.8298 5.34633 13.2933 5.91811 13.2933H6.43575C7.00753 13.2933 7.47105 12.8298 7.47105 12.258V11.7404C7.47105 11.1686 7.00753 10.7051 6.43575 10.7051Z" stroke="#333333" />
                                                <Path d="M6.43575 15.8828H5.91811C5.34633 15.8828 4.88281 16.3463 4.88281 16.9181V17.4358C4.88281 18.0075 5.34633 18.471 5.91811 18.471H6.43575C7.00753 18.471 7.47105 18.0075 7.47105 17.4358V16.9181C7.47105 16.3463 7.00753 15.8828 6.43575 15.8828Z" stroke="#333333" />
                                                <Path d="M12.2561 10.7051H11.7384C11.1666 10.7051 10.7031 11.1686 10.7031 11.7404V12.258C10.7031 12.8298 11.1666 13.2933 11.7384 13.2933H12.2561C12.8278 13.2933 13.2914 12.8298 13.2914 12.258V11.7404C13.2914 11.1686 12.8278 10.7051 12.2561 10.7051Z" stroke="#333333" />
                                                <Path d="M12.2561 15.8828H11.7384C11.1666 15.8828 10.7031 16.3463 10.7031 16.9181V17.4358C10.7031 18.0075 11.1666 18.471 11.7384 18.471H12.2561C12.8278 18.471 13.2914 18.0075 13.2914 17.4358V16.9181C13.2914 16.3463 12.8278 15.8828 12.2561 15.8828Z" stroke="#333333" />
                                                <Path d="M18.0842 10.7051H17.5665C16.9948 10.7051 16.5312 11.1686 16.5312 11.7404V12.258C16.5312 12.8298 16.9948 13.2933 17.5665 13.2933H18.0842C18.656 13.2933 19.1195 12.8298 19.1195 12.258V11.7404C19.1195 11.1686 18.656 10.7051 18.0842 10.7051Z" stroke="#333333" />
                                                <Path d="M18.0842 15.8828H17.5665C16.9948 15.8828 16.5312 16.3463 16.5312 16.9181V17.4358C16.5312 18.0075 16.9948 18.471 17.5665 18.471H18.0842C18.656 18.471 19.1195 18.0075 19.1195 17.4358V16.9181C19.1195 16.3463 18.656 15.8828 18.0842 15.8828Z" stroke="#333333" />
                                            </Svg>
                                            <Text style={styles.txtTT}>Thống kê đơn hàng</Text>
                                        </View>
                                        <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z" fill="#333333" />
                                        </Svg>
                                    </View>
                                    <View style={styles.flexRowBTN}>
                                        <TouchableOpacity>
                                            <Text style={[styles.btnBox, styles.btnBoxActive]}>Lịch bị Fail</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={[styles.btnBox]}>Lịch hẹn trễ gọi</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.txtTongFail}>Tổng số lịch bị Fail : 1505 đơn</Text>
                                    <View style={styles.boxInfo}>
                                        <Text style={styles.name}>Đào Mạnh Cương</Text>
                                        <Text style={styles.dateCreated}>18/07/2023</Text>
                                    </View>
                                    <View style={styles.boxInfo}>
                                        <Text style={styles.name}>Đào Mạnh Cương</Text>
                                        <Text style={styles.dateCreated}>18/07/2023</Text>
                                    </View>
                                    <View style={styles.boxInfo}>
                                        <Text style={styles.name}>Đào Mạnh Cương</Text>
                                        <Text style={styles.dateCreated}>18/07/2023</Text>
                                    </View>
                                    <View style={styles.boxInfo}>
                                        <Text style={styles.name}>Đào Mạnh Cương</Text>
                                        <Text style={styles.dateCreated}>18/07/2023</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <Footer />
                </View >

            </SafeAreaView >
        );
    }
}
const mapStateToProps = state => ({
    product: state.product,
    color: state.color,
    size: state.size,
    customer: state.customer,
    cart: state.cart,
    category: state.category,
    hang: state.hang,
    supplier: state.supplier,
});

const mapDispatchToProps = dispatch => ({
    productAction: (act, data) => dispatch(productAction(act, data)),
    colorAction: (act, data) => dispatch(colorAction(act, data)),
    sizeAction: (act, data) => dispatch(sizeAction(act, data)),
    customerAction: (act, data) => dispatch(customerAction(act, data)),
    cartAction: (act, data) => dispatch(cartAction(act, data)),
    categoryAction: (act, data) => dispatch(categoryAction(act, data)),
    hangAction: (act, data) => dispatch(hangAction(act, data)),
    supplierAction: (act, data) => dispatch(supplierAction(act, data)),
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(withNavigation(Main));
export default connect(mapStateToProps, mapDispatchToProps)(ThongKeChung)
