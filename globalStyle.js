import { StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%', //
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
    },
    imageContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bottomContainer: {
        flex: 1,
        paddingBottom: screenHeight * 0.03,
        justifyContent: 'flex-end',
    },
    text: {
        fontFamily: 'RobotoSerif-Medium',
        color: '#000',
        // fontSize: RFValue(14),
    },
    h1: {
        fontSize: RFValue(26),
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    img: {
        height: undefined,
        width: '90%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    btn: {
        backgroundColor: '#3EB620',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: screenWidth * 0.20,
        marginVertical: screenHeight * 0.01,
        width: '100%',
        borderRadius: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#CDF4C3',
        padding: 15,
        marginVertical: screenHeight * 0.01,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e8e8e8',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkBtn: {
        color: 'gray',
        fontSize: RFValue(12),
        marginVertical: screenHeight * 0.005,
    },
    errorText: {
        color: 'red',
        fontSize: RFValue(12),
        marginBottom: screenHeight * 0.005,
    }
});

export default globalStyle;
