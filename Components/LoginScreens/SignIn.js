import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useContext } from 'react';
import globalStyle from '../../globalStyle';
import CustomInputs from '../Customs/CustomInputs';
import CustomButton from '../Customs/CustomButton';
import { signInSchema } from './Schema';
import { Formik } from 'formik';
import { AuthContext } from '../../Context/AuthContext';

const SignIn = ({ navigation }) => {
    const { logIn } = useContext(AuthContext);

    const handlelogin = async (values) => {
        try {
            await logIn(values.email, values.password);
        } catch (error) {
            Alert.alert('Login Failed', error.message || "Please check your credentials.");
        }
    };

    return (
        <View style={globalStyle.container}>
            <Text style={[globalStyle.text, globalStyle.h1]}>Get you started!</Text>
            <Text style={[globalStyle.text, globalStyle.h2]}>Sign In to your account.</Text>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={signInSchema}
                onSubmit={handlelogin} // Call handlelogin on submit
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.inputField}>
                        <Text style={globalStyle.text}>Email :</Text>
                        <CustomInputs
                            placeholder={'xyz@example.com'}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {touched.email && errors.email && (
                            <Text style={globalStyle.errorText}>{errors.email}</Text>
                        )}
                        <Text style={globalStyle.text}>Password :</Text>
                        <CustomInputs
                            placeholder={'At least 8 characters long.'}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            secureTextEntry
                        />
                        {touched.password && errors.password && (
                            <Text style={globalStyle.errorText}>{errors.password}</Text>
                        )}
                        <CustomButton text={'Submit'} type={'Primary'} onPress={handleSubmit} />
                        <CustomButton text={'Forget Password'} type={'Secondary'} onPress={() => navigation.navigate('Email')} />
                        <CustomButton text={"Don't have an account? Create one."} type='Secondary' onPress={() => navigation.navigate('SignUp')} />
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    inputField: {
        width: '90%',
        marginTop: '10%',
    },
});
