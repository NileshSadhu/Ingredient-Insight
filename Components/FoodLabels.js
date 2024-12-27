import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import globalStyle from '../globalStyle';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native-gesture-handler';

const labels = [
    {
        id: '1',
        title: 'Fssai',
        subtitle: 'Food Safety and Standards Authority of India.',
        description: 'It is a statutory body that regulates the food industry in India to ensure the quality of food and protect public health.',
        image: require('../../assets/Labels/fssai.png'),
    },
    {
        id: '2',
        title: 'Veg',
        subtitle: 'Assurance of Vegetarian-Friendly Ingredients',
        description: "The Veg certification label indicates that a product contains only plant-based ingredients, making it suitable for vegetarians. It ensures no animal-derived ingredients or by-products are used, providing a trusted choice for consumers who follow a vegetarian lifestyle.",
        image: require('../../assets/Labels/veg.png'),
    },
    {
        id: '3',
        title: 'Non-Veg',
        subtitle: 'Contains Animal-Derived Ingredients',
        description: "The Non-Veg certification label signifies that a product contains meat, poultry, or other animal-derived ingredients. It helps consumers identify non-vegetarian products, ensuring informed decisions based on dietary preferences or ethical choices.",
        image: require('../../assets/Labels/Non-veg.png'),
    },
    {
        id: '4',
        title: 'BIS-Mark',
        subtitle: 'Bureau of Indian Standards (BIS)',
        description: "The ISI mark, issued by the Bureau of Indian Standards (BIS), is a trusted certification ensuring food products meet India’s quality and safety standards.\
        It signifies that the product has undergone rigorous testing, making it safe and reliable for consumption.",
        image: require('../../assets/Labels/isi-mark.png'),
    },
    {
        id: '5',
        title: 'Agmark',
        subtitle: 'Ensuring Quality in Agricultural Products',
        description: "Agmark, issued by the Directorate of Marketing and Inspection under the Government of India, certifies the quality and purity of agricultural products.\
        It ensures that products like grains, spices, and oils meet rigorous standards for safety, hygiene, and quality. Agmark helps consumers make informed choices by guaranteeing reliability and compliance with established guidelines.",
        image: require('../../assets/Labels/agmark.png'),
    },
    {
        id: '6',
        title: 'Vegan',
        subtitle: 'Certified Plant-Based Products',
        description: "The Vegan Mark certifies that a product is entirely plant-based, free from animal-derived ingredients, and not tested on animals.\
        It promotes ethical choices and sustainability, ensuring consumers can trust the product to align with their vegan lifestyle and values.",
        image: require('../../assets/Labels/vegan.png'),
    },
    {
        id: '7',
        title: 'Fortified',
        subtitle: 'Enhancing Nutrition for Better Health',
        description: "Fortified products are enriched with essential vitamins and minerals to improve nutritional value and support overall health.\
        The Fortified certification guarantees that the product contains added nutrients, helping to address dietary gaps and promote wellness for consumers.",
        image: require('../../assets/Labels/fortified.png'),
    },
    {
        id: '8',
        title: 'Jaivik Mark',
        subtitle: 'Certified Organic Excellence',
        description: "The Jaivik Mark is a certification for organic products in India, ensuring they are grown and processed without synthetic chemicals, pesticides, or fertilizers.\
        It signifies that the product meets strict organic farming standards, offering consumers a trusted choice for healthy, eco-friendly, and sustainable products.",
        image: require('../../assets/Labels/jaivik-mark.png'),
    },
];

const FoodLabels = () => {

    const showLabels = ({ item }) => {
        return (
            <View style={styles.section}>
                <Image
                    style={styles.img}
                    source={item.image}
                />
                <Text style={[globalStyle.text, styles.heading]}>{item.title}</Text>
                <Text style={[globalStyle.text, styles.subtitle]}>{item.subtitle}</Text>
                <Text style={[globalStyle.text, styles.description]}>{item.description}</Text>
            </View>
        )
    }

    return (
        <View style={[globalStyle.container, styles.container]}>
            <Text style={[styles.head, globalStyle.text]}>Labels</Text>
            <View style={styles.card}>
                <FlatList
                    data={labels}
                    renderItem={showLabels}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </View>
    )
}

export default FoodLabels;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3BE620',
        paddingTop: '20%',
    },
    head: {
        fontSize: RFValue(22),
        textAlign: 'center',
        marginTop: 20,
    },
    card: {
        marginTop: '10%',
        paddingTop: '10%',
        backgroundColor: '#f9f9f9',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    listContainer: {
        paddingBottom: 20,
    },
    section: {
        padding: 20,
        marginVertical: 20,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginLeft: '5%',
        marginRight: '5%',

        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        elevation: 4,
        width: '90%',
    },
    img: {
        width: 80,
        height: 80,
        marginBottom: 15,
        resizeMode: 'contain',
    },
    heading: {
        fontSize: RFValue(16),
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: RFValue(14),
        textAlign: 'center',
        marginBottom: 8,
        color: '#555',
    },
    description: {
        fontSize: RFValue(12),
        textAlign: 'center',
        color: '#777'
    }
})