import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Formik } from 'formik';

import { forgetPasswordSchema } from './Schema';
import globalStyle from '../../globalStyle';
import CustomInputs from '../CustomInputs';
import CustomButton from '../CustomButton';

const ForgetPasswordS2 = ({ navigation }) => {
    const handlePin = (values) => {
        console.log('The OTP was correct: ', values.number);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={{ number: '' }}
                validationSchema={forgetPasswordSchema}
                onSubmit={handlePin}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.forgetBox}>
                        <Text style={[globalStyle.h3, globalStyle.text]}>Enter your OTP:</Text>
                        <CustomInputs
                            placeholder={'Enter the 4 pin number.'}
                            value={values.number}
                            onChangeText={handleChange('number')}
                            onBlur={handleBlur('number')}
                        />
                        {errors.number && touched.number && (
                            <Text style={globalStyle.errorText}>{errors.number}</Text>
                        )}
                        <CustomButton text={'Submit'} onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default ForgetPasswordS2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '10%',
    },
    forgetBox: {
        marginTop: '10%',
        justifyContent: 'flex-start',
    }
})