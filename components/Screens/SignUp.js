import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../CustomInputs/Input';
import Buttons from '../CustomButtons/Buttons';
import globalStyles from '../globalStyle';

export default function SignUp() {

    const screenHeight = Dimensions.get('window').height;
    const headerMarginBottom = screenHeight * 0.02;

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    return (
        <View style={[styles.loginContainer, styles.sameStyle]}>
            <View style={[styles.head, { marginBottom: headerMarginBottom }, styles.sameStyle]}>
                <Text style={[styles.h1, globalStyles.text]}>Sign Up</Text>
                <Text style={[styles.h2, globalStyles.text]}>create an account</Text>
            </View>
            <View style={styles.lablesBox}>

                <Text style={[styles.label, globalStyles.text]}>Name:</Text>
                <Input
                    placeholder={'Nilesh N. Sadhu'}
                    value={username}
                    setValue={setUsername} />

                <Text style={[styles.label, globalStyles.text]}>Email:</Text>
                <Input
                    placeholder={'xyz@email.com'}
                    value={email}
                    setValue={setEmail} />

                <Text style={[styles.label, globalStyles.text]}>Password:</Text>
                <Input
                    placeholder={'At least 8 characters.'}
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />

                <Text style={[styles.label, globalStyles.text]}>Re-Enter Password:</Text>
                <Input
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    placeholder={'Should match it with the above password.'}
                    secureTextEntry={true} />

                <Text style={{ fontStyle: 'italic', marginHorizontal: 3 }}>
                    By signing up you agree to the <Text style={styles.links}>Term of use</Text> and <Text style={styles.links}>Privacy Polices</Text>.
                </Text>

                <Buttons text='Register' />
                <Buttons
                    text="Already have an account?"
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
        // marginBottom: 5,
    },
    links: {
        color: '#4551ff'
    }
});
