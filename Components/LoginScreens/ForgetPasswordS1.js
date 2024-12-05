import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';

import { forgetPasswordSchema } from './Schema';
import globalStyle from '../../globalStyle';
import CustomInputs from '../CustomInputs';
import CustomButton from '../CustomButton';

const ForgetPasswordS1 = ({ navigation }) => {
    const handleForgetEmail = (values) => {
        console.log('Did you forget password, email: ', values.email);
        navigation.navigate('ForgetPaswordS2');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={forgetPasswordSchema}
                onSubmit={handleForgetEmail}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.forgetBox}>
                        <Text style={[globalStyle.h3, globalStyle.text]}>Enter your email:</Text>
                        <CustomInputs
                            placeholder={'Enter your email.'}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {errors.email && touched.email && (
                            <Text style={globalStyle.errorText}>{errors.email}</Text>
                        )}
                        <CustomButton text={'Submit'} onPress={handleSubmit} />

                    </View>
                )}
            </Formik>
        </SafeAreaView>
    );
}

export default ForgetPasswordS1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '10%',
    },
    forgetBox: {
        marginTop: '10%',
        justifyContent: 'flex-start',
    }
});
