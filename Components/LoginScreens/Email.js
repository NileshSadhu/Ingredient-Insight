import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Formik } from 'formik'
import globalStyle from "../../globalStyle"
import CustomInputs from "../Customs/CustomInputs"
import CustomButton from '../Customs/CustomButton'
import forgetPasswordSchema from "../LoginScreens/Schema";
import axios from 'axios'

const Email = ({ navigation }) => {

    const CheckUserEmail = async (values) => {
        try {
            const response = await axios.post("http://192.168.189.196:3000/verifyEmail", { email: values.email });
            console.log(values.email);
            navigation.navigate('VerifyOTP');
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: "" }}
                validationSchema={forgetPasswordSchema}
                onSubmit={CheckUserEmail} 
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, touched }) => (
                    <View style={styles.checkEmail}>
                        <Text style={[globalStyle.text]}>Enter your email :</Text>
                        <Text style={[globalStyle.text, styles.subtitle]}>A verification code will be sent to the eamil.</Text>
                        <CustomInputs
                            placeholder={'xyz@example.com'}
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
        </View>
    )
}

export default Email

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '10%',
    },
    checkEmail: {
        marginTop: '10%',
        justifyContent: 'flex-start',
    },
    subtitle: {
        fontSize: 12,
        color: 'grey',
    }
})
