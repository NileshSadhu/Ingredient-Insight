import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import globalStyle from '../globalStyle';

export default function Inputs({ placeholder, value, onChangeText, onBlur, secureTextEntry }) {
    return (
        <TextInput
            style={globalStyle.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
        />
    );
}
