import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drinks } from './ConstantData'
import { TouchableOpacity } from 'react-native'
import globalStyle from '../../globalStyle'

const DrinkList = () => {
    return (
        <FlatList
            data={Drinks}
            renderItem={({ item }) => (
                <View style={styles.drinks}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 130, height: 130, borderRadius: 10 }}
                    />
                    <Text style={[globalStyle.text, styles.text]}>
                        {item.name}
                    </Text>
                </View>
            )}
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: 'space-around',
            }}
            showsVerticalScrollIndicator={false}
            style={{marginTop: 15}}
        />
    )
}

export default DrinkList

const styles = StyleSheet.create({
    drinks: {
        backgroundColor: '#ffffff',
        marginHorizontal: 8,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 16,
        alignItems: 'center',

        shadowColor: '#000',         // Color of the shadow
        shadowOffset: { width: 0, height: 2 }, // Position of the shadow
        shadowOpacity: 0.25,        // Opacity of the shadow
        shadowRadius: 3.84,         // Blur radius of the shadow
        elevation: 5,               // Required for Android to cast shadow
    },
    text: {
        marginVertical: 5,
    }
})