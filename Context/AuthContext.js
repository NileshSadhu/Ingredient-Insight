import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    // LogIn function accepts email and password
    const logIn = async (email, password) => {
        setIsLoading(true);
        try {
            // Fixed URL
            const response = await axios.post('http://192.168.38.196:3000/login', { email, password });

            // Extract token from response
            const { token } = response.data;

            // Store token in AsyncStorage
            await AsyncStorage.setItem("userToken", token);
            setUserToken(token);
        } catch (error) {
            console.error("Login Error : ", error.message);
            alert("Login Failed. Please check your credentials.");
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (username, email, password) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://192.168.38.196:3000/register', {
                username,
                email,
                password,
            });

            const { token } = response.data;
            if (!token) {
                await AsyncStorage.setItem('userToken', token);
                setUserToken(token);
            } else {
                alert("Registration failed. No token received.");
            }

            alert("Registration Successful! Please log in.");
        } catch (error) {
            console.error("SignUp Error: ", error.message);
            alert(error.response?.data?.message || "Registration failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    const logOut = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.removeItem('userToken');
            setUserToken(null);
        } catch (error) {
            console.log("LogOut Error: ", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const isLoggedIn = async () => {
        setIsLoading(true);
        try {
            const token = await AsyncStorage.getItem('userToken');
            setUserToken(token);
        } catch (error) {
            console.log("Token retrieval error:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoading, userToken, logIn, logOut, register }}>
            {children}
        </AuthContext.Provider>
    );
};
