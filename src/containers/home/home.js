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
import HeaderHome from '../element/HeaderHome';
import Footer from '../element/Footer';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    gotoPage(name) {
        this.props.navigation.navigate(name);
    }

    renderCategory() {
        const d = [];
        for (let i = 0; i < 5; i++) {
            d.push(
                <View style={{ ...styles.categoryBox, marginRight: i === 4 ? 0 : 20 }}>
                    <View style={{ ...styles.categoryIcon, }}>
                        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M8.39187 12.6155C7.97037 13.1429 7.88062 13.7282 7.78518 14.3026C7.37618 16.7476 7.35573 19.2188 7.22734 21.6846C7.15918 23.0081 7.49206 23.0551 5.76742 22.9906C3.82693 22.9186 4.0087 23.2134 4.00189 21.2576C3.98939 17.6027 4.35068 13.9816 5.27548 10.4282C5.61518 9.12213 6.12985 7.89362 7.18644 6.93047C7.84199 6.33205 8.52139 6.16279 9.35076 6.56028C9.60184 6.6804 9.72795 6.72736 9.53595 7.01783C9.23715 7.46992 8.61228 7.87833 8.72703 8.3883C8.83496 8.86879 9.37462 9.25972 9.72227 9.69107C11.3958 11.7746 13.0284 13.8855 14.3508 16.1994C14.5269 16.5085 14.6292 16.8164 14.6201 17.1768C14.5292 20.5565 14.4531 23.9363 14.3645 27.3161C14.3486 27.9385 14.1293 28.1438 13.4965 28.0455C11.8945 27.7966 10.3244 27.4307 8.81792 26.8269C8.25326 26.6008 8.07262 26.2361 8.12261 25.689C8.29416 23.8348 8.46572 21.9805 8.6191 20.1241C8.80428 17.8855 9.05082 15.6469 8.70317 13.4017C8.66454 13.1473 8.63387 12.8841 8.39187 12.6155Z" fill="#1B20B6" />
                            <Path d="M21.4162 12.6299C21.0787 13.24 21.0248 13.8195 20.992 14.398C20.835 17.1768 21.1806 19.9327 21.4536 22.6918C21.5556 23.7189 21.6388 24.747 21.7302 25.7751C21.7747 26.2717 21.5708 26.6319 21.0799 26.8578C19.5203 27.5749 17.8622 27.9383 16.1374 28.0649C15.6253 28.1021 15.3781 27.8805 15.3793 27.3872C15.3898 23.9077 15.3629 20.4271 15.5375 16.9498C15.5726 16.2523 15.9452 15.6335 16.2698 15.019C17.4439 12.7914 18.9789 10.781 20.6791 8.88297C21.0588 8.46059 21.1783 8.12552 20.8455 7.67366C20.8092 7.62455 20.7693 7.56779 20.7611 7.51104C20.7178 7.20216 20.1577 6.96095 20.5209 6.63025C20.9334 6.2548 21.7747 6.26789 22.1977 6.56367C23.7761 7.6682 24.5834 9.22459 25.0123 10.9502C25.945 14.7014 26.1008 18.516 25.9497 22.3491C25.9333 22.7628 25.7587 22.9821 25.2829 22.9876C24.676 22.9941 24.069 23.0323 23.462 23.064C22.9148 23.0924 22.6922 22.8621 22.6664 22.348C22.5621 20.2874 22.534 18.2224 22.3161 16.1672C22.2282 15.3421 22.1344 14.5181 21.9259 13.7104C21.8356 13.3568 21.7302 13.0086 21.4162 12.6299ZM16.9529 22.4135C17.4146 22.3764 17.704 22.1363 17.7017 21.7193C17.7005 21.3068 17.4181 21.0285 16.96 21.0285C16.503 21.0285 16.2183 21.3002 16.2147 21.7172C16.2124 22.1352 16.4971 22.3753 16.9529 22.4135ZM16.9916 18.6088C17.4427 18.5575 17.7181 18.3031 17.7017 17.8917C17.6853 17.4824 17.4041 17.215 16.9354 17.2303C16.4678 17.2455 16.2054 17.5282 16.2171 17.9375C16.23 18.3512 16.5206 18.5891 16.9916 18.6088Z" fill="#1B20B6" />
                            <Path d="M15.2543 15.7586C13.8683 12.9876 12.0678 10.6252 10.2059 8.30687C10.0228 8.07889 10.0655 7.9258 10.2059 7.71875C10.468 7.33107 10.7015 6.92357 10.9647 6.5348C11.1237 6.29911 11.0831 6.17796 10.8079 6.11298C10.3923 6.01606 9.98221 5.89822 9.56662 5.8046C9.30565 5.74623 9.24315 5.66583 9.38241 5.396C11.5645 1.15912 17.6897 0.809989 20.2808 4.78145C20.3587 4.9004 20.4201 5.03146 20.5034 5.1471C20.8049 5.5612 20.7622 5.78698 20.2106 5.92795C19.1042 6.211 19.0845 6.25395 19.6799 7.23415C19.976 7.72095 19.9705 8.04585 19.5944 8.50951C17.6886 10.8598 16.2039 13.3786 15.2543 15.7586ZM15.1622 13.818C15.7258 12.2387 16.171 10.6935 16.7324 9.18574C17.1162 8.15598 17.5614 7.14494 17.7599 6.05461C17.9255 5.14049 17.5866 4.44003 16.7917 4.0061C16.3706 3.77702 15.91 3.69552 15.444 3.65697C13.1468 3.46314 12.0305 4.88938 12.7882 7.03921C13.4659 8.96107 14.1424 10.8829 14.819 12.8048C14.9374 13.1407 15.0482 13.4799 15.1622 13.818Z" fill="#1B20B6" />
                        </Svg>
                    </View>
                    <Text style={styles.categoryName} numberOfLines={2}>Áo ba lỗ ba lỗ</Text>
                </View>
            )
        }
        return d;
    }

    renderElement() {
        const d = [];
        for (let i = 0; i < 6; i++) {
            d.push(
                <View style={{ marginBottom: 10 }}>
                    <View style={{ ...styles.box, marginBottom: 10 }}>
                        <View style={styles.categoryList}>
                            <Text style={styles.title}>Áo 3 lỗ</Text>
                            <TouchableOpacity>
                                <Text style={styles.viewMore}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View style={styles.categorySlide}>

                            {this.renderProduct()}
                        </View>
                    </ScrollView>
                </View>
            )
        }
        return d;
    }

    renderProduct() {
        const d = [];
        for (let i = 0; i < 8; i++) {
            d.push(
                <TouchableOpacity style={{ marginRight: i === 7 ? 0 : 20 }}>
                    <View style={styles.element}>
                        <Image style={styles.productImage} resizeMode="cover" source={require('../../../asset/images/aodep.jpg')} />
                        <View style={styles.productInfo}>
                            <Text style={styles.productName} numberOfLines={2}>Ducati Multistrada V4Ducati Multistrada V4</Text>
                            <Text style={styles.productPrice}>Giá: <Text style={styles.productPriceGoc}>$420.00</Text></Text>
                            <Text style={styles.productPrice}>Mua: <Text style={styles.productPriceBan}>$420.00</Text></Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return d;
    }

    render() {
        const navigation = this.props.navigation;
        const data = this.state.data;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <HeaderHome />
                    <ScrollView style={{ backgroundColor: '#F7F7F9' }}>
                    <Image style={styles.banner} resizeMode="cover" source={require('../../../asset/images/banner1.jpg')} />
                        <View style={styles.box}>
                            <Text style={styles.title}>Danh mục</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View style={styles.categorySlide}>
                                {this.renderCategory()}
                            </View>
                        </ScrollView>

                        {
                            this.renderElement()
                        }

                        {/* <View style={styles.box}>
                            <View style={styles.categoryList}>
                                <Text style={styles.title}>Áo 3 lỗ</Text>
                                <TouchableOpacity>
                                    <Text style={styles.viewMore}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View style={styles.categorySlide}>

                                {this.renderProduct()}
                            </View>
                        </ScrollView> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)
