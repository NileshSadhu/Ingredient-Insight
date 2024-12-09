import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyle from '../../globalStyle';
import { RFValue } from 'react-native-responsive-fontsize';

const faqs = [
    {
        id: 1,
        question: "What is the Nutri-Ranking System?",
        answer: "The Nutri-Ranking System helps users understand the nutritional quality of foods by assigning them a ranking based on their health impact.",
    },
    {
        id: 2,
        question: "How do the rankings work?",
        answer: "Foods are categorized into five levels: 🍀 Green Leaf (healthiest), 🧐 The Meh Zone (moderate), 😷 Proceed with Caution (less healthy), 🤢 Yikes, Stay Away (unhealthy), and ☠️ Danger Zone (harmful).",
    },
    {
        id: 3,
        question: "Who is the app for?",
        answer: "This app is for anyone who wants to make informed food choices, whether you're looking to eat healthier, lose weight, or simply learn more about nutrition.",
    },
    {
        id: 4,
        question: "Is the app free to use?",
        answer: "Yes, the app is free, but we may offer premium features in the future.",
    },
    {
        id: 5,
        question: "How do I search for a specific food?",
        answer: "Use the search bar on the main screen to find detailed rankings for specific foods.",
    },
    {
        id: 6,
        question: "Can I compare different foods?",
        answer: "Yes, you can compare foods by selecting multiple items and viewing their rankings side by side.",
    },
    {
        id: 7,
        question: "Does the app provide recipes?",
        answer: "Yes, we include recipes featuring foods from the top rankings to inspire healthy eating.",
    },
    {
        id: 8,
        question: "What should I do if my favorite food is in the 'Danger Zone'?",
        answer: "Consider limiting or avoiding its consumption and looking for healthier alternatives. The app may suggest similar, healthier options.",
    },
    {
        id: 9,
        question: "Where does the nutritional data come from?",
        answer: "Our rankings are based on data from trusted sources such as government health organizations, scientific studies, and nutritional databases.",
    },
    {
        id: 10,
        question: "Can I contribute food data to the app?",
        answer: "Currently, only verified data is included. However, you can suggest new foods or corrections via the feedback section.",
    },
    {
        id: 11,
        question: "How often is the data updated?",
        answer: "We regularly update our database to include new foods and reflect the latest research.",
    },
    {
        id: 12,
        question: "Do I need to create an account to use the app?",
        answer: "No account is required for basic functionality. However, creating an account lets you save preferences, track your diet, and customize rankings.",
    },
    {
        id: 13,
        question: "Can I personalize the rankings based on my dietary needs?",
        answer: "Yes, you can set preferences such as gluten-free, vegetarian, or low-carb, and the app will adjust its recommendations.",
    },
    {
        id: 14,
        question: "The app isn’t working properly. What should I do?",
        answer: "Ensure you have the latest version installed. If problems persist, contact our support team via the Help section.",
    },
    {
        id: 15,
        question: "Can I use the app offline?",
        answer: "Core features like food ranking are accessible offline, but some functionalities (like updates and new data) require an internet connection.",
    },
];

const FandQs = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            {faqs.map((item, id) => (
                <View style={styles.container} key={id}>
                    <View style={styles.part}>
                        <View style={styles.section}>
                            <Icon name='help-outline' size={24} />
                            <Text style={[globalStyle.text, styles.question]}>{item.question}</Text>
                        </View>
                        <Text style={[globalStyle.text, styles.answer]}>{item.answer}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

export default FandQs

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    part: {
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 1,
        margin: 10,
        paddingBottom: 20,
    },
    section: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    question: {
        fontSize: RFValue(18),
        fontWeight: 'bold',
    },
    answer: {},
})