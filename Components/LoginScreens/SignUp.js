import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import globalStyle from '../../globalStyle';
import Inputs from '../Inputs';
import CustomButton from '../CustomButton';
import { string, object, ref } from 'yup';
import { Formik } from 'formik';

const registerSchema = object({
    username: string().required('Username is required.')
        .max(35, '#35 characters is the limit.'),
    email: string()
        .required('Email is required.')
        .email('Invalid Email.'),
    password: string()
        .required('Password is required.')
        .min(8, 'Minimum 8 characters are required.')
        .max(16, 'Password length should not exceed 16 characters.'),
    confirmPassword: string()
        .oneOf([ref('password'), null], 'Passwords must match.')
        .required('Confirm Password is required.'),
});

const SignUp = () => {
    const handleSignUp = (values) => {
        console.log('Register Successful with values:', values);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.signUp_Section}>
                <View style={globalStyle.center}>
                    <Text style={[globalStyle.h1, globalStyle.text]}>Sign Up</Text>
                    <Text style={globalStyle.text}>Create an account.</Text>
                </View>
                <Formik
                    initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                    validationSchema={registerSchema}
                    onSubmit={handleSignUp}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={styles.formSection}>
                            <Text style={globalStyle.text}>Username :</Text>
                            <Inputs
                                placeholder="Enter your name."
                                value={values.username}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                            />
                            {touched.username && errors.username && (
                                <Text style={globalStyle.errorText}>{errors.username}</Text>
                            )}

                            <Text style={globalStyle.text}>Email :</Text>
                            <Inputs
                                placeholder="Enter your email."
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                            />
                            {touched.email && errors.email && (
                                <Text style={globalStyle.errorText}>{errors.email}</Text>
                            )}

                            <Text style={globalStyle.text}>Password :</Text>
                            <Inputs
                                placeholder="Enter your password."
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                secureTextEntry={true}
                            />
                            {touched.password && errors.password && (
                                <Text style={globalStyle.errorText}>{errors.password}</Text>
                            )}

                            <Text style={globalStyle.text}>Confirm Password :</Text>
                            <Inputs
                                placeholder="Re-enter your password."
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                secureTextEntry={true}
                            />
                            {touched.confirmPassword && errors.confirmPassword && (
                                <Text style={globalStyle.errorText}>{errors.confirmPassword}</Text>
                            )}

                            <View>
                                <Text style={styles.warning}>
                                    By signing up, you agree to our{' '}
                                    <Text style={{ color: '#3b47ed' }}>Terms & Conditions.</Text>
                                </Text>
                            </View>

                            <CustomButton text="Submit" onPress={handleSubmit} />
                            <TouchableOpacity
                                style={globalStyle.center}
                                accessibilityRole="button"
                            >
                                <Text style={[globalStyle.text, globalStyle.linkBtn]}>
                                    Already have an account?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    signUp_Section: {
        flex: 1,
        paddingHorizontal: '5%',
        justifyContent: 'center',
    },
    formSection: {
        marginTop: 20,
    },
    warning: {
        fontSize: 12,
        color: 'gray',
        marginTop: 10,
        textAlign: 'center',
    },
});
