import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import globalStyles from '../globalStyle';
import Buttons from '../CustomButtons/Buttons';

export default function GetStarted() {
    const screenHeight = Dimensions.get('window').height;

    return (
        <SafeAreaView style={styles.container}>
            {/* App Name */}
            <View style={styles.appNameContainer}>
                <Text style={[styles.h1, globalStyles.text]}>Ingredient Insight</Text>
            </View>

            {/* Image */}
            <View style={styles.imgContainer}>
                <Image 
                    source={require('../../assets/panda.png')} 
                    style={[
                        styles.img, 
                        { width: screenHeight * 0.5, height: screenHeight * 0.5 }
                    ]}
                />
            </View>

            {/* Get Started Section */}
            <View style={styles.getStartedContainer}>
                <Text style={[styles.h2, globalStyles.text]}>
                    "Curious about what's inside your favourite packet food?"
                </Text>
                <Buttons text="Get Started" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appNameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    getStartedContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 20,
    },
    h1: {
        fontSize: 24,
        fontWeight: '500',
    },
    h2: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    img: {
        resizeMode: 'contain',
    },
});
