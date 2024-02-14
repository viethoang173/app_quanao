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
    img: { resizeMode: 'contain' },
    imgSplash: { resizeMode: 'cover', width: ww, height: wh },
    h3: { fontSize: 16, fontWeight: 'bold', lineHeight: 24, color: '#333' },

    thumbnail: {
        height: wh / 10 * 3,
        width: "100%",
    },
    groupInput: {
        width: ww / 10 * 8,
        borderBottomWidth: 0.5,
        borderBottomColor: "#000",
        marginBottom: 15,
    },
    element: {
        paddingHorizontal: 40,
        paddingTop: 40,
        // backgroundColor: "red",
    },
    input: {
        paddingVertical: 5,
    },
    txtLable: {
        fontSize: 16,
        color: "#000"
    },
    txtLink: {
        color: "#BC0E1E",
        fontWeight: '500',
        fontSize: 15,
        margin: 15,
    },
    flexRowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnLogin: {
        backgroundColor: "#BC0E1E",
        textAlign: "center",
        padding: 8,
        borderRadius: 20,
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: 'bold',
        marginTop: 10,
    }
});