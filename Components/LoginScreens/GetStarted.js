import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native'
import React from 'react'
import globalStyle from '../../globalStyle'
import CustomButton from '../CustomButton';


export default function GetStarted() {
    const screenHeight = Dimensions.get('window').height;

    return (
        <SafeAreaView style={globalStyle.container}>
            {/* App Name */}
            <View style={globalStyle.header}>
                <Text style={[globalStyle.h1, globalStyle.text]}>Ingredient Insigth</Text>
                <Text style={globalStyle.text}>"Curious what inside your Favourite</Text>
                <Text style={globalStyle.text}>packet food?"</Text>
            </View>

            {/* Panda Image */}
            <View style={globalStyle.imageContainer}>
                <Image
                    source={(require('../../assets/panda.png'))}
                    style={[globalStyle.img,
                    { width: screenHeight * 0.6, height: screenHeight * 0.6 }
                    ]}
                />
            </View>

            {/* Button Container */}
            <View style={globalStyle.bottomContainer}>
                <CustomButton text={'Get Started'}/>
            </View>
        </SafeAreaView >
    )
}