import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useContext } from 'react'
import globalStyle from '../../globalStyle'
import { Formik } from 'formik'
import { signUpSchema } from './Schema'
import CustomInputs from '../CustomInputs'
import CustomButton from '../CustomButton'
import { AuthContext } from '../../Context/AuthContext'

const SignUp = ({ navigation }) => {
    const { register } = useContext(AuthContext);
    const handleSignUP = async (values) => {
        try {
            
            await register(values.username, values.email, values.password);
            navigation.navigate('HomeScreen')
        } catch (error) {
            Alert.alert('Register Failed', error.message)
        }
    }

    return (
        <View style={globalStyle.container}>
            <Text style={[globalStyle.text, globalStyle.h1]}>Sign Up</Text>
            <Text style={[globalStyle.text, globalStyle.h2]}>Create an account.</Text>
            <Formik
                initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                validationSchema={signUpSchema}
                onSubmit={(values) => handleSignUP(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.inputField}>
                        <Text style={[globalStyle.text]}>Username :</Text>
                        <CustomInputs placeholder={'Nilesh N. Sadhu'} value={values.username}
                            onChangeText={handleChange('username')} onBlur={handleBlur('username')} />
                        {errors.username && touched.username && (
                            <Text style={[globalStyle.text, globalStyle.errorText]}>{errors.username}</Text>
                        )}

                        <Text style={[globalStyle.text]}>Email :</Text>
                        <CustomInputs placeholder={'xyz@example.com'} value={values.email}
                            onChangeText={handleChange('email')} onBlur={handleBlur('email')} />
                        {errors.email && touched.email && (
                            <Text style={[globalStyle.text, globalStyle.errorText]}>{errors.email}</Text>
                        )}

                        <Text style={[globalStyle.text]}>Password :</Text>
                        <CustomInputs placeholder={'Enter your password.'} secureTextEntry={true}
                            onChangeText={handleChange('password')} onBlur={handleBlur('password')} />
                        {errors.password && touched.password && (
                            <Text style={[globalStyle.text, globalStyle.errorText]}>{errors.password}</Text>
                        )}

                        <Text style={[globalStyle.text]}>Confirm Password :</Text>
                        <CustomInputs placeholder={'Re-enter your password.'} secureTextEntry={true}
                            onChangeText={handleChange('confirmPassword')} onBlur={handleBlur('confirmPassword')} />
                        {errors.confirmPassword && touched.confirmPassword && (
                            <Text style={[globalStyle.text, globalStyle.errorText]}>{errors.confirmPassword}</Text>
                        )}

                        <CustomButton text={'Submit'} onPress={handleSubmit} />
                        <CustomButton text={'Already have an account ( Sign In )'} type='Secondary' onPress={()=> navigation.navigate('SignIn')} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    inputField: {
        width: '90%',
        marginTop: '10%',
    }
})