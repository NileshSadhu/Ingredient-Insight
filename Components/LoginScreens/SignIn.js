import { StyleSheet, Text, View, TouchableOpacity, Alert, BackHandler } from 'react-native';
import React, { useContext } from 'react';
import globalStyle from '../../globalStyle';
import CustomButton from '../CustomButton';
import Inputs from '../Inputs';
import { object, string } from 'yup';
import { Formik } from 'formik';
import SignUp from './SignUp';
import { AuthContext } from '../../Context/AuthContext';

const loginSchema = object({
    email: string()
        .required('Email is required.')
        .email('Invalid Email.'),
    password: string()
        .required('Password is required.')
        .min(8, 'Minimum 8 characters are required.')
        .max(16, 'Password length should not exceed 16 characters.'),
});

const SignIn = ({ navigation }) => {

    const { login } = useContext(AuthContext);

    const handleLogin = (values) => {
        console.log('Form Submitted');
        Alert.alert('Login Successful');
    };

    return (
        <View style={styles.loginContainer}>
            <View style={globalStyle.center}>
                <Text style={[globalStyle.h1, globalStyle.text]}>Get You Started</Text>
                <Text style={globalStyle.text}>Sign in to your account.</Text>
            </View>

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={(values) => handleLogin(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.formSection}>
                        {/* Email Field */}
                        <Text style={globalStyle.text}>Email:</Text>
                        <Inputs
                            placeholder="xyz@email.com"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {touched.email && errors.email && (
                            <Text style={globalStyle.errorText}>{errors.email}</Text>
                        )}

                        {/* Password Field */}
                        <Text style={globalStyle.text}>Password:</Text>
                        <Inputs
                            placeholder="At least 8 characters."
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            secureTextEntry
                        />
                        {touched.password && errors.password && (
                            <Text style={globalStyle.errorText}>{errors.password}</Text>
                        )}

                        <CustomButton text="Submit" onPress={()=> {
                            login; 
                            handleSubmit
                        } }/>

                        {/* Forget Password */}
                        <TouchableOpacity
                            style={globalStyle.center}
                            accessibilityRole="link"
                        >
                            <Text style={[globalStyle.text, globalStyle.linkBtn]}>
                                Forget Password
                            </Text>
                        </TouchableOpacity>

                        {/* Create Account */}
                        <TouchableOpacity
                            style={globalStyle.center}
                            accessibilityRole="link"
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <Text style={[globalStyle.text, globalStyle.linkBtn]}>
                                Don't have an account? Create one.
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: '5%',
        justifyContent: 'center',
    },
    formSection: {
        marginVertical: 50,
    },
});
