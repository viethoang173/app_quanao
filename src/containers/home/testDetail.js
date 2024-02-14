/*
    File demo code
*/
import React, { Component } from 'react';
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
    Modal,
} from 'react-native';

import Svg, { Path } from 'react-native-svg';
import Swiper from 'react-native-swiper';
import Footer from '../elements/Footer';

// import { notifications } from "react-native-firebase-push-notifications"
// import NetInfo from "@react-native-community/netinfo";

import { connect } from 'react-redux';
// import { withNavigation } from '@react-navigation/native';
import { DOMAIN } from '../../../constants/config';

import { get_home_products } from '../../services/productService';
import productAction from '../../actions/productAction';

class TestDetail extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            data: {},
        }

        console.log(this.props.product);
    }


    componentDidMount()
    {
    }

    render() {
        const navigation = this.props.navigation;
        const data = this.state.data;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Text>{this.props.product.id}</Text>
                    <Text>{this.props.product.title}</Text>
                </View>
            </SafeAreaView>
       );
    }
}

const mapStateToProps = state => ({
    product: state.product,
});

const mapDispatchToProps = dispatch => ({
    productAction: (act, data) => dispatch(productAction(act, data)),
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(withNavigation(Main));
export default connect(mapStateToProps, mapDispatchToProps)(TestDetail)
