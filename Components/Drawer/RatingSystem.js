import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyle from '../../globalStyle';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    contentWrapper: {
        padding: 16,
    },
    header: {
        marginBottom: 20,
    },
    h1: {
        fontSize: RFValue(28),
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    intro: {
        marginBottom: 20,
    },
    h3: {
        fontSize: RFValue(16),
        color: '#666',
        lineHeight: 24,
        textAlign: 'left',
        marginBottom: 10,
    },
    h5: {
        fontSize: RFValue(14),
        color: '#888',
        lineHeight: 22,
        textAlign: 'left',
    },
    card: {
        // flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    greenCard: { backgroundColor: '#50C878' },
    mehCard: { backgroundColor: '#FFD700' },
    cautionCard: { backgroundColor: '#FFA500' },
    badCard: { backgroundColor: '#FF4500' },
    dangerCard: { backgroundColor: '#8B0000' },
    cardContent: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
    },
    emoji: {
        fontSize: RFValue(60),
    },
    cardTitle: {
        fontSize: RFValue(18),
        fontWeight: 'bold',
        color: '#FFF',
        marginTop: 10,
    },
    cardDescription: {
        flex: 2,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        marginLeft: 10,
    },
    descriptionText: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 5,
    },
    cardDetail: {
        fontSize: RFValue(13),
        color: '#666',
        textAlign: 'center',
    },
});

const nutriRatings = [
    {
        style: styles.greenCard,
        emoji: "🍀",
        title: "Green Leaf",
        descriptionTitle: "The Best of the Best!",
        description: "This food is a superstar – healthy, wholesome, and great for any time of the day. Snack guilt-free!",
    },
    {
        style: styles.mehCard,
        emoji: "🧐",
        title: "The Meh Zone",
        descriptionTitle: "Decent, but Not All the Time.",
        description: "This food is okay, but moderation is key. Once a week? Sure! Every day? Maybe not.",
    },
    {
        style: styles.cautionCard,
        emoji: "😷",
        title: "Proceed with Caution!",
        descriptionTitle: "Not the Healthiest Choice.",
        description: "Think twice before digging in – or save it for special occasions.",
    },
    {
        style: styles.badCard,
        emoji: "🤢",
        title: "Yikes, Stay Away!",
        descriptionTitle: "Bad News for Your Body.",
        description: "Avoid as much as you can – your health will thank you.",
    },
    {
        style: styles.dangerCard,
        emoji: "☠️",
        title: "Danger Zone!",
        descriptionTitle: "Absolutely Avoid.",
        description: "This food is so bad it’s banned in some countries. Don’t go there!",
    },
];

const RatingSystem = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentWrapper}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={[globalStyle.text, styles.h1]}>
                        Know Your Food Better with Our Nutri-Ranking System!
                    </Text>
                </View>

                {/* Introduction Section */}
                <View style={styles.intro}>
                    <Text style={[globalStyle.text, styles.h3]}>
                        Ever wondered how your favorite foods stack up in terms of health? Our Nutri-Ranking System is here to help!
                        We don’t just rate food on taste but also on the quality of its ingredients and its overall impact on your health.
                    </Text>
                    <Text style={[globalStyle.text, styles.h5]}>
                        Let’s dive into our fun and easy-to-understand ranking system:
                    </Text>
                </View>

                {/* Card Section */}
                <View>
                    {nutriRatings.map((item, index) => (
                        <View key={index} style={[styles.card, item.style]}>
                            <View style={styles.cardContent}>
                                <Text style={styles.emoji}>{item.emoji}</Text>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                            </View>
                            <View style={styles.cardDescription}>
                                <Text style={styles.descriptionText}>{item.descriptionTitle}</Text>
                                <Text style={styles.cardDetail}>{item.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default RatingSystem;
