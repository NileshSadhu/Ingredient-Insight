import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import globalStyle from '../../globalStyle'
import { RFValue } from 'react-native-responsive-fontsize'

const CustomHeader = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={[globalStyle.text, styles.h1]}>Hello</Text>
                <Text style={[globalStyle.text, styles.h1]}>Nilesh,</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.profileBtn}>
                    <Image 
                    source={require('../../assets/Images/pandaProfile.png')}
                    style={{height: 60, width: 60}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    h1: {
        fontSize: RFValue(24),
    },
    profileBtn: {
        width: 80,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#81ff6e',
    }
})