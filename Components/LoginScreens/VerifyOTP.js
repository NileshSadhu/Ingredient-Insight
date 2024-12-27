import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import forgetPasswordSchema from "./Schema";
import { Formik } from 'formik';
import globalStyle from '../../globalStyle';
import CustomInputs from '../Customs/CustomInputs';
import CustomButton from '../Customs/CustomButton';
import axios from 'axios';

const VerifyOTP = ({navigation}) => {
    const checkOTP = async (values) => {
        const response = await axios.post("http://192.168.189.196:3000/verify-otp", {otp: values.otp});
        console.log("Button Clicked.");
        console.log("OTP Submitted : ", values.otp);
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ otp: '' }} // Initialize otp as an empty string
                validationSchema={forgetPasswordSchema}
                onSubmit={checkOTP}
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={styles.checkOTP}>
                        <Text style={[globalStyle.text]}>Enter the OTP :</Text>
                        <Text style={[globalStyle.text, styles.subtitle]}>Enter the code which was sent to the email.</Text>
                        <CustomInputs
                            placeholder={'XXXX'}
                            value={values.otp}
                            onChangeText={handleChange('otp')}
                            onBlur={handleBlur('otp')}
                        />
                        {errors.otp && touched.otp && (
                            <Text style={globalStyle.errorText}>{errors.otp}</Text>
                        )}
                        <CustomButton text={'Submit'} onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default VerifyOTP;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '10%',
    },
    checkOTP: {
        marginTop: '10%',
        justifyContent: 'flex-start',
    },
    subtitle: {
        fontSize: 12,
        color: 'grey',
    },
});
