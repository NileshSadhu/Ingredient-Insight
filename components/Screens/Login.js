import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../CustomInputs/Input'
import Buttons from '../CustomButtons/Buttons';

export default function Login() {
    Dimensions.get('window').height * 0.15;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={[styles.loginContainer, styles.sameStyle]}>
            <View style={[styles.head, styles.sameStyle]}>
                <Text style={styles.h1}>Get you started !</Text>
                <Text style={styles.h2}>Sign to your account.</Text>
            </View>
            <View style={styles.lablesBox}>

                <Text style={styles.label}>Email :</Text>
                <Input
                    placeholder={'xyz@email.com'}
                    value={username}
                    setValue={setUsername} />

                <Text style={styles.label}>Password :</Text>
                <Input
                    value={password}
                    setValue={setPassword}
                    placeholder={'At least 8 character.'}
                    secureTextEntry={true} />

                <Buttons text='Submit' />
                <Buttons
                    text='Forget Password'
                    type='TERTIARY'
                />
                <Buttons
                    text="Don't have an account ? Create one."
                    type='TERTIARY'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        fontFamily: 'RobotoSerif-Medium',
    },
    sameStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    head: {
        marginBottom: Dimensions.get('window').height * 0.08,
    },
    h1: {
        fontSize: 26,
    },
    h2: {
        fontSize: 16,
    },
    lablesBox: {
        width: '90%',
    }
})