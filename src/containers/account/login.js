/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';
import { connect } from 'react-redux';


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
    Modal,
    Alert,
} from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// import Config from '../config.js';
// import Header from '../elements/Header';
// import Footer from '../elements/Footer';
import styles from './styles.js';
import { login, get_user_data } from '../../services/accountService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import accountAction from '../../actions/accountAction';

class Login extends Component {
    // const { productId } = route.params;

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            pass: '',
            token: '',
        }
    }

    componentDidMount() {
        this.getData();
    }

    storeAppID = async (value) => {
        try {
        await AsyncStorage.setItem('appID', value);

        } catch (e) {
        // saving error
        }
    }

    async getData() {
        try {
            var value = await AsyncStorage.getItem('appID');
            
            if(value !== null) {
                // value previously stored
                this.setState({token: value});

                const data = await get_user_data(value);

                if(data.id)
                {
                    this.props.accountAction('user_info', data);
                    this.props.navigation.navigate("Home");
                }
            }
            else
            {
            }
        } catch(e) {
        // error reading value
        }
    }

    async login()
    {
        if(this.state.user == '' || this.state.pass == '')
        {
            Alert.alert("Vui lòng nhập đủ thông tin");
            return;
        }

        const data = await login(this.state.user, this.state.pass);

        if(data.id)
        {
            console.log('logged done!');
            this.props.accountAction('user_info', data);
            this.storeAppID(data.token);
            this.props.navigation.navigate("Home");
        }
        else
        {
            Alert.alert("Thông tin đăng nhập không đúng!");
        }
    }

    gotoPage = (options) => {
        this.props.navigation.navigate(options);
    }

    setPass(txt)
    {
        this.setState({pass: txt});
    }
    setUser(txt)
    {
        this.setState({user: txt});
    }

    render() {
        const data = this.state.data;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <ScrollView>
                        <View>
                            <Image style={styles.thumbnail} resizeMode='cover' source={require('../../../asset/images/anh-gai-xinh-cuc-dep.jpg')}></Image>
                        </View>
                        <View style={styles.element}>
                            <View style={styles.groupInput}>
                                <Text style={styles.txtLable}>TÀI KHOẢN</Text>
                                <TextInput
                                    style={styles.input} placeholder='Tên đăng nhập'
                                    onChangeText={(text) => this.setUser(text)}
                                />
                            </View>
                            <View style={styles.groupInput}>
                                <Text style={styles.txtLable}>MẬT KHẨU</Text>
                                <TextInput password={true}  secureTextEntry={true}
                                    style={styles.input} placeholder='Mật khẩu'
                                    onChangeText={(text) => this.setPass(text)}
                                />
                            </View>
                            <TouchableOpacity onPress={()=>this.login()}>
                                <Text style={styles.btnLogin}>Đăng Nhập</Text>
                            </TouchableOpacity>
                            <View style={styles.flexRowBetween}>
                                <TouchableOpacity>
                                    <Text style={styles.txtLink}></Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={styles.txtLink}>Hotline: </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View >
            </SafeAreaView >
        );
    }
};

const mapStateToProps = state => ({
    admin: state.admin,
});

const mapDispatchToProps = dispatch => ({
    accountAction: (act, data) => dispatch(accountAction(act, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
