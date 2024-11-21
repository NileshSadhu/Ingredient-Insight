import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../CustomInputs/Input'
import Buttons from '../CustomButtons/Buttons';

export default function ForgetPasswordScreen() {
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView style={styles.forgetContainer}>
            <View style={{ width: '100%' }}>
                <Text style={styles.label}>Enter your Email :</Text>
                <Input
                    placeholder={'Enter your email.'}
                    value={email}
                    setValue={setEmail}
                />
                <Buttons text='Submit'/>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    forgetContainer: {
        flex: 1,
        marginHorizontal: '8%',
        marginTop: '50%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: 16,
    },
})