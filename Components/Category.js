import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import globalStyle from '../globalStyle';

const categories = [
    { id: 1, title: 'Cold Drinks', image: require('../assets/Category/Drinks.png') },
    { id: 2, title: 'Chocolate', image: require('../assets/Category/Chocolate.png') },
    { id: 3, title: 'Snack', image: require('../assets/Category/Snack.png') },
    { id: 4, title: 'Dairy', image: require('../assets/Category/Dairy.png') },
    { id: 5, title: 'Fruits', image: require('../assets/Category/fruits.png') },
    { id: 6, title: 'Vegetables', image: require('../assets/Category/vegetable.png') }
];

const Category = () => {
    return (
        <View style={styles.category}>
            <Text style={[styles.h1, globalStyle.text]}>Categories</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
                {categories.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} style={styles.categoriesName}>
                            <Image
                                source={item.image}
                                style={styles.image}
                            />
                            <Text style={[globalStyle.text, styles.section]}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default Category;

const styles = StyleSheet.create({
    h1: {
        fontSize: RFValue(18),
        paddingHorizontal: 10,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    section: {
        fontSize: RFValue(12),
        textAlign: 'center',
        marginTop: 5,
    },
    categoriesName: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    scrollView: {
        paddingHorizontal: 10,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginBottom: 5, // Added margin for spacing between image and text
    },
});
