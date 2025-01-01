import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import globalStyle from '../globalStyle';

const categories = [
    { id: 1, title: 'Drinks', image: require('../assets/Category/Drinks.png') },
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
                        <TouchableOpacity key={item.id}>
                            <Image
                                source={item.image}
                                style={styles.image}
                            />
                            <Text style={[globalStyle.text, styles.categoryName]}>{item.title}</Text>
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
    scrollView: {
        paddingHorizontal: 10,
    },
    image: {
        height: 45,
        width: 45,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    categoryName: {
        fontSize: RFValue(10),
        textAlign: 'center',
        marginHorizontal: 5,
    }
});
