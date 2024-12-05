import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required.')
        .email('Please enter a valid email address.'),
    password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters.')
        .max(16, 'Password must not exceed 16 characters.'),
});

export const signUpSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required.'),
    email: Yup.string()
        .required('Email is required.')
        .email('Please enter a valid email address.'),
    password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters.')
        .max(16, 'Password must not exceed 16 characters.'),
    confirmPassword: Yup.string()
        .required('Please confirm your password.')
        .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
});

export const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required.')
        .email('Please enter a valid email address.'),

    number: Yup.string()
        .required('OTP Pin is required.')
        .matches(/^\d{4}$/, 'OTP must be exactly 4 digits.'),
});
