import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import globalStyle from '../../globalStyle'
import CustomButton from '../CustomButton';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const GetStarted = ({ navigation }) => {
    return (
        <View style={globalStyle.container}>
            <View style={styles.topContainer}>
                <Text style={[globalStyle.text, globalStyle.h1]}>Ingredient Insigth</Text>
                <Text style={[globalStyle.text, globalStyle.h2]}>Safety | Transparency | Trust</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image
                    source={require('../../assets/Images/panda.png')}
                    style={styles.img}
                />
            </View>
            <View style={styles.btnContainer}>
                <CustomButton text={'Get Started'} onPress={() => navigation.navigate('SignIn')} />
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    topContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: height * 0.5,
        width: width * 0.9,
        resizeMode: 'contain',
    },
    imgContainer: {
        flex: 3,
        justifyContent: 'flex-start',
    },
    btnContainer: {
        justifyContent: 'flex-end',
        width: '90%',
        margin: 10,
    }
})