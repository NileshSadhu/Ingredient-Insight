import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Input from '../CustomInputs/Input';
import Buttons from '../CustomButtons/Buttons';
import globalStyles from '../globalStyle';
import { authContext } from '../../Context/Authentication';

export default function SingIn() {

    const screenHeight = Dimensions.get('window').height;
    const headerMarginBottom = screenHeight * 0.05;

    const {} = useContext(authContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[styles.loginContainer, styles.sameStyle]}>
            <View style={[styles.head, { marginBottom: headerMarginBottom }, styles.sameStyle]}>
                <Text style={[styles.h1, globalStyles.text]}>Get you started !</Text>
                <Text style={[styles.h2, globalStyles.text]}>Sign in to your account.</Text>
            </View>
            <View style={styles.lablesBox}>

                <Text style={[styles.label, globalStyles.text]}>Email:</Text>
                <Input
                    placeholder={'xyz@email.com'}
                    value={username}
                    setValue={setUsername} />

                <Text style={[styles.label, globalStyles.text]}>Password:</Text>
                <Input
                    value={password}
                    setValue={setPassword}
                    placeholder={'At least 8 characters.'}
                    secureTextEntry={true} />

                <Buttons text='Submit' />
                <Buttons
                    text='Forget Password'
                    type='TERTIARY'
                />
                <Buttons
                    text="Don't have an account? Create one."
                    type='TERTIARY'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    sameStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    head: {
        // marginBottom is dynamically calculated using screen height
    },
    h1: {
        fontSize: 26,
    },
    h2: {
        fontSize: 16,
    },
    lablesBox: {
        width: '90%',
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
});
