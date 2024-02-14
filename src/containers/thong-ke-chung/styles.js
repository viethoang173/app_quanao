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

    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: "center",
    },

    //

    boxTotal: {
        backgroundColor: "#046161",
        paddingVertical: 32,
        paddingHorizontal: 20,
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        height: 113,
    },
    imgCoin: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    txtTotal: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 10,
    },
    numTotal: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
    },
    bgCoin: {
        position: "absolute",
        right: 20,
        top: 16,
        zIndex: 1,
    },
    flexThongKe: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        justifyContent: "space-between",
        marginBottom: 20,
    },
    boxThongke: {
        width: ww / 2 - 15,
        height: 100,
        justifyContent: "center",
        padding: 10,
    },
    textTongchi: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginBottom: 15,
    },
    numTongChi: {
        fontSize: 13,
        fontWeight: '500',
        color: '#333',
    },
    textLoiNhuan: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 15,
    },
    numLoiNhuan: {
        fontSize: 13,
        fontWeight: '500',
        color: '#fff',
    },
    //
    dropdown: {
        justifyContent: "space-between",
        padding: 10,
    },
    txtTT: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        marginLeft: 10,
    },
    borderBox: {
        borderWidth: 1,
        borderColor: '#CDCDCD',
        borderRadius: 7,
    },
    flexColumnItem: {
        flexDirection: 'column',
        rowGap: 10,
        marginHorizontal: 10,
        marginBottom: 40,

    },
    flexRowBTN: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 8,
        columnGap: 10,
        marginBottom: 15,
    },
    btnBox: {
        paddingVertical: 8,
        paddingHorizontal: 13,
        backgroundColor: "#8E8E8E",
        color: "#FFFFFF",
        fontWeight: "500",
        fontSize: 10,
        borderRadius: 20,
    },
    btnBoxActive: {
        backgroundColor: "#076D6F",
    },
    txtTongFail: {
        fontSize: 13,
        color: "#666",
        fontWeight: "500",
        marginHorizontal: 10,
        marginBottom: 20,
    },
    //
    boxInfo: {
        padding: 10,
        borderTopColor: "#CDCDCD",
        borderTopWidth: 1,
    },
    name: {
        fontSize: 12,
        fontWeight: "500",
        color: "#000",
        marginBottom: 6,
    },
    dateCreated: {
        fontSize: 12,
        fontWeight: "500",
        color: "#000",
    },
});