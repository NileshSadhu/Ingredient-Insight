import { Dimensions, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'RobotoSerif-Medium',
    },
    h1: {
        fontSize: RFValue(26),
    },
    h2: {
        fontSize: RFValue(14),
        marginTop: 6,
    },
    h3: {
        fontSize: RFValue(16),
        marginTop: 6,
    },
    errorText: {
        fontSize: RFValue(10),
        color: 'red',
        marginVertical: 5,
    } 
})

export default globalStyle