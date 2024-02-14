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

// import { notifications } from "react-native-firebase-push-notifications"
// import NetInfo from "@react-native-community/netinfo";

import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { DOMAIN } from '../../../constants/config';

import styles from './styles.js';

class Main extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            isActive: 'Giá buôn',
            modalVisible: false,
            // search_key: '',
            // isRefreshing: false,
            // isLogged: false,
            // cityLabel: 'Toàn Quốc',
        }
    }

    componentDidMount()
    {
        this.checkNetInfo();
        // this.check_logged();
        
    }

    setIsActive(opt)
    {
        this.setState({isActive: opt});
    }

    setModalVisible(opt)
    {
        this.setState({modalVisible: opt});
    }

    handleActive = (option) => {
        setIsActive(option);
        setModalVisible(false);
    }

    Cancel = () => {
        setModalVisible(false);
    }

    // async check_logged()
    // {
    //     var user = [];
       
    //     await AsyncStorage.getItem('user', (err, result) => {
    //         if (!err && result != null){
    //             user = JSON.parse(result);
    //             // user.verified = parseInt(user.verified);
    //             // console.log(user);



    //             this.props.update_user('update', user);
    //         }
    //     });
    // }
    
    // checkNetInfo()
    // {
    //     NetInfo.fetch().then(state => 
    //     {
    //         if(state.isConnected)
    //         {
    //             // this.props.category('get');
    //             // this.getCats();
    //             this.props.navigation.navigate('Main');
    //         }
    //         else
    //             Alert.alert("Thông báo", "Không có kết nối mạng, vui lòng thử lại!");
    //     });
    // }

    // async getCats()
    // {
    //     await fetch(DOMAIN + 'api_category/api_category_get_list', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => 
    //     {
    //         console.log('responseJson');
    //         console.log(responseJson);
    //         this.props.dangtin('catproduct', responseJson.data);
    //     });
    // }

    gotoBDS(category_id)
    {
        this.reset_search_conn();
        this.props.filterCategory('set_root', category_id);
        this.props.filterCategory('set_current', category_id);
        this.props.filterCategory('set_label', "Tất cả");
        
        this.props.navigation.navigate("Batdongsan");
    }
    
    // renderBoxLogin()
    // {
    //     var ad_pos = 'app_home';

    //     if(this.props.user.uid == '')
    //         return (
    //             <View style={[s.row, styles.homeBoxLogin]}>
    //                 <View style={[s.col12]}>
    //                     <Text style={[styles.homeSlogan]}>Đăng nhập Sóc lửa để không bỏ lỡ các sản phẩm giá rẻ</Text>

    //                     <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
    //                         <Text style={[s.btn, s.btnRed, styles.homeDNN]}>ĐĂNG NHẬP NGAY</Text>
    //                     </TouchableOpacity>

    //                     <TouchableOpacity onPress={()=>this.props.navigation.navigate("Dangky")}>
    //                         <Text style={[s.btn, styles.homeDKTK]}>Đăng ký tài khoản</Text>
    //                     </TouchableOpacity>
    //                 </View>
    //             </View>
    //         );

    //     return (
    //         <View style={[s.row, styles.homeBoxLogin]}>
    //             <View style={[s.col12]}>
    //                 <Ads ad_pos={ad_pos} />
    //             </View>
    //         </View>
    //     );
    // }


    render() {
        if(this.state.step == 0 && this.state.cityLabel != 'Toàn Quốc')
            this._search();

        if(this.state.step == 0)

        return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.navigate(Cart)}>
                        <View style={styles.gioHang}>
                            <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M15.375 14.375H6.45313L4.27344 2.39063C4.24793 2.2471 4.17307 2.11701 4.06179 2.02285C3.95051 1.9287 3.80982 1.8764 3.66406 1.875H2.25" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M7.25 17.5C8.11294 17.5 8.8125 16.8004 8.8125 15.9375C8.8125 15.0746 8.11294 14.375 7.25 14.375C6.38706 14.375 5.6875 15.0746 5.6875 15.9375C5.6875 16.8004 6.38706 17.5 7.25 17.5Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M15.375 17.5C16.2379 17.5 16.9375 16.8004 16.9375 15.9375C16.9375 15.0746 16.2379 14.375 15.375 14.375C14.5121 14.375 13.8125 15.0746 13.8125 15.9375C13.8125 16.8004 14.5121 17.5 15.375 17.5Z" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                <Path d="M5.88281 11.25H15.6953C15.9875 11.2509 16.2706 11.1488 16.4949 10.9616C16.7193 10.7744 16.8704 10.5142 16.9219 10.2266L17.875 5H4.75" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                            </Svg>
                            <Text style={styles.soLuong}>0</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.headerCenter}>
                        <Svg style={styles.iconSearch} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M20.043 18.3752L14.9047 13.2369C15.9367 11.8587 16.5553 10.1532 16.5553 8.29915C16.5553 3.73938 12.8589 0.0429688 8.29915 0.0429688C3.73938 0.0429688 0.0429688 3.73938 0.0429688 8.29915C0.0429688 12.8589 3.73938 16.5553 8.29915 16.5553C10.1532 16.5553 11.8587 15.9367 13.2369 14.9047L18.3752 20.043L20.043 18.3752ZM2.40188 8.29915C2.40188 5.04739 5.04739 2.40188 8.29915 2.40188C11.5509 2.40188 14.1964 5.04739 14.1964 8.29915C14.1964 11.5509 11.5509 14.1964 8.29915 14.1964C5.04739 14.1964 2.40188 11.5509 2.40188 8.29915Z" fill="#848484" />
                        </Svg>
                        <TextInput
                            style={styles.inputsearch}
                            placeholder="Tìm kiếm"
                        />
                    </View>

                    <View style={styles.headerRight}>
                        <TouchableOpacity style={styles.bntTest} onPress={() => setModalVisible(true)}>
                            <Text style={styles.btnText}>{isActive}</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Chọn loại giá</Text>
                                    <TouchableOpacity onPress={() => handleActive('Giá nhập')}>
                                        <Text style={[styles.txtFilter, isActive === 'Giá nhập' && styles.activeCL]}>Giá nhập</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleActive('Giá buôn')}>
                                        <Text style={[styles.txtFilter, isActive === 'Giá buôn' && styles.activeCL]}>Giá buôn</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleActive('Giá lẻ')}>
                                        <Text style={[styles.txtFilter, isActive === 'Giá lẻ' && styles.activeCL]}>Giá lẻ</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleActive('Giá CTV')}>
                                        <Text style={[styles.txtFilter, isActive === 'Giá CTV' && styles.activeCL]}>Giá CTV</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.centeredView1}>
                                <TouchableOpacity onPress={Cancel}>
                                    <Text style={styles.txtClose}>Hủy bỏ</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={1} onPress={() => setModalVisible(!modalVisible)}
                                style={styles.modalBackdrop}
                            />
                        </Modal>
                    </View>
                </View >


                <ScrollView>
                    <View>
                        <View style={styles.homeBox}>
                            <View style={styles.homeBoxHeader}>
                                <Text style={styles.homeTilte}>Sản phẩm mới</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ListProduct')} >
                                    <Text style={styles.btnViewMore}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                            <Swiper style={styles.swiperContainer} showsPagination={false} autoplay={false} loop={false} showsButtons={false}>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Swiper>
                        </View>
                        <View style={styles.homeBox}>
                            <View style={styles.homeBoxHeader}>
                                <Text style={styles.homeTilte}>Sản phẩm mới</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ListProduct')} >
                                    <Text style={styles.btnViewMore}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                            <Swiper style={styles.swiperContainer} showsPagination={false} autoplay={false} loop={false} showsButtons={false}>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Swiper>
                        </View>
                        <View style={styles.homeBox}>
                            <View style={styles.homeBoxHeader}>
                                <Text style={styles.homeTilte}>Sản phẩm mới</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ListProduct')} >
                                    <Text style={styles.btnViewMore}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                            <Swiper style={styles.swiperContainer} showsPagination={false} autoplay={false} loop={false} showsButtons={false}>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Swiper>
                        </View>
                        <View style={styles.homeBox}>
                            <View style={styles.homeBoxHeader}>
                                <Text style={styles.homeTilte}>Sản phẩm mới</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ListProduct')} >
                                    <Text style={styles.btnViewMore}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                            <Swiper style={styles.swiperContainer} showsPagination={false} autoplay={false} loop={false} showsButtons={false}>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Swiper>
                        </View>
                        <View style={styles.homeBox}>
                            <View style={styles.homeBoxHeader}>
                                <Text style={styles.homeTilte}>Sản phẩm mới</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ListProduct')} >
                                    <Text style={styles.btnViewMore}>Xem tất cả</Text>
                                </TouchableOpacity>
                            </View>
                            <Swiper style={styles.swiperContainer} showsPagination={false} autoplay={false} loop={false} showsButtons={false}>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.columnContainer}>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('EditQuantity')} >
                                        <Image style={styles.thumbnail} source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                                        <View style={styles.card_content}>
                                            <Text style={styles.namesp}>CODE1</Text>
                                            <Text style={styles.pricesp}>300.000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Swiper>
                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity onPress={() => navigation.navigate('FilterCategory')} style={styles.btnFilter}>
                    <Svg style={styles.iconfilter} width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M11.7188 6.09375C11.6079 4.89022 11.0779 3.76386 10.2211 2.91138C9.36433 2.0589 8.23532 1.53447 7.03125 1.42969V0H6.09375V1.42969C4.89387 1.53967 3.77039 2.06639 2.91839 2.91839C2.06639 3.77039 1.53967 4.89387 1.42969 6.09375H0V7.03125H1.42969C1.53447 8.23532 2.0589 9.36433 2.91138 10.2211C3.76386 11.0779 4.89022 11.6079 6.09375 11.7188V13.125H7.03125V11.7188C8.23897 11.6131 9.37087 11.0854 10.2281 10.2281C11.0854 9.37087 11.6131 8.23897 11.7188 7.03125H13.125V6.09375H11.7188ZM6.5625 10.7812C5.72811 10.7812 4.91246 10.5338 4.21869 10.0703C3.52492 9.6067 2.98419 8.94782 2.66488 8.17695C2.34558 7.40607 2.26203 6.55782 2.42481 5.73946C2.58759 4.92111 2.98939 4.1694 3.57939 3.57939C4.1694 2.98939 4.92111 2.58759 5.73946 2.42481C6.55782 2.26203 7.40607 2.34558 8.17695 2.66488C8.94782 2.98419 9.6067 3.52492 10.0703 4.21869C10.5338 4.91246 10.7812 5.72811 10.7812 6.5625C10.7812 7.68138 10.3368 8.75444 9.54561 9.54561C8.75444 10.3368 7.68138 10.7812 6.5625 10.7812Z" strokeWidth="2" fill="white" />
                    </Svg>
                </TouchableOpacity>



                <Footer />
            </View >
        </SafeAreaView >
    );
    }
}

const mapStateToProps = state => ({
    product: state.product,
});

const mapDispatchToProps = dispatch => ({
    productAction: (act, data) => dispatch(productAction(act, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Main));