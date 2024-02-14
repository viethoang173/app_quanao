import { StyleSheet, Dimensions } from 'react-native';

const wh = Dimensions.get('window').height;
const ww = Dimensions.get('window').width;

const w1 = ww / 100;
// const w5 = w1 * 5;
// const w8 = w1 * 8;
// const w10 = w1 * 10;
const w20 = w1 * 20;
// const w25 = w1 * 25;
// const w37 = w1 * 37;
// const w50 = w1 * 50;
// const w70 = w1 * 70;
// const w76 = w1 * 76;
// const w80 = w1 * 80;
// const w90 = w1 * 90;
// const w95 = w1 * 95;

// const home_btn_height = w37 * 60 / 238;
// const slogan_height = w70 * 155 / 448;
const homeCatImageWidth = (ww - 70) / 4;

const news_list_item_left_width = (ww - 30) / 3;
const news_list_item_right_width = (ww - 40) - news_list_item_left_width;
const news_list_item_image_height = news_list_item_left_width - (news_list_item_left_width / 3);

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },

    //banner
    banner: {
        marginHorizontal: 18,
        width: ww - 36,
        borderRadius: 4,
        marginTop: 15,
    },
    //banner

    box: {
        paddingHorizontal: 18,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1E22B8',
        marginTop: 12,
        marginBottom: 6,
    },
    categorySlide: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    categoryIcon: {
        width: 62,
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8DCEC',
        borderRadius: 8,
        marginBottom: 8,
    },
    categoryName: {
        fontSize: 14,
        fontWeight: '700',
        color: "#3B3DBA",
        width: 68,
        paddingHorizontal: 2,
        textAlign: 'center'
    },
    categoryBox: {
        alignItems: 'center',
        width: 62,
    },
    categoryList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewMore: {
        color: '#666',
        textDecorationLine: 'underline',
    },

    //sản phẩm
    element: {
        flexDirection: 'row',
        width: 250,
        elevation: 2,
        backgroundColor: 'white',
    },
    productImage: {
        width: 100,
        height: 100,
    },
    productName: {
        color: '#181818',
        width: 140
    },
    productInfo: {
        justifyContent: 'center',
        padding: 5,
        borderLeftWidth: 0.3,
        borderLeftColor: '#DADADA'
    },
    productPrice: {
        marginTop: 3,
    },
    productPriceGoc: {
        textDecorationLine: 'line-through',
        fontSize: 12,
    },
    productPriceBan: {
        fontWeight: 'bold',
        color: '#ED1651'
    },
});