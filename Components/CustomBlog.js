import { FlatList, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import globalStyle from '../globalStyle';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

const blog = [
    {
        id: 1,
        image: require("../assets/Images/blogBg.png"),
        title: "Junk or Healthy ! Which one to choose ?",
        subtitle: "Junk food, on the contrary, is high in calories but low in nutrients.",
    },
    {
        id: 2,
        image: require("../assets/Images/blogBg1.png"),
        title: "Healthy Eating: Tips and Tricks",
        subtitle: "Discover how to make nutritious choices without sacrificing taste.",
    },
    {
        id: 3,
        image: require("../assets/Images/blogBg2.png"),
        title: "Does Vegetrian food have protien ?",
        subtitle: "Discover how to make nutritious choices without sacrificing taste.",
    }
];

const CustomBlog = () => {
    return (
        <View>
            <Text style={[globalStyle.text, styles.h1]}>Blog</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
                {blog.map((item) => {
                    return (
                        <View key={item.id} style={styles.BlogContainer}>
                            <Image
                                source={item.image}
                                style={styles.image}
                            />
                            <TouchableOpacity style={styles.textContainer}>
                                <Text style={[styles.title, globalStyle.text]}>{item.title}</Text>
                                <Text style={[styles.subtitle, globalStyle.text]}>{item.subtitle}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

export default CustomBlog;

const styles = StyleSheet.create({
    h1: {
        fontSize: RFValue(18),
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    scrollView: {
        paddingHorizontal: 10,
    },
    BlogContainer: {
        width: 250,
        height: 280,
        padding: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    image: {
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    textContainer: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: RFValue(16),
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: RFValue(12),
        color: '#7c877f',
    },
});
