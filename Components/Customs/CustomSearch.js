import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const CustomSearch = () => {
    return (
        <View style={styles.searchBox}>
            <Icon name="search" size={25} color='#3BE620' style={{ paddingTop: 8, }} />
            <TextInput
                placeholder='ex: Maggi'
                style={{paddingHorizontal: 10, width: '90%'}}
            />
        </View>
    )
}

export default CustomSearch

const styles = StyleSheet.create({
    searchBox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#d9d1d0',
        backgroundColor: '#fff',

        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: '#000',
        elevation: 2,
    }
})