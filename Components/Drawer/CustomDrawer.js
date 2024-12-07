import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../../Context/AuthContext'

const CustomDrawer = (props) => {
    const { logOut } = useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{
                    backgroundColor: '#56db79',
                    borderRadius: 0,
                }}
            >
                <Image source={require('../../assets/Images/pandaProfile.png')} style={styles.img} />
                <View style={styles.drawerList}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Icon name='share-social-outline' size={22} />
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>Share</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={logOut}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Icon name='log-out-outline' size={22} />
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 200,
        marginHorizontal: 'auto',
    },
    drawerList: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
    },
    footerButton: {
        padding: 10,
    },
    footer: {
        padding: 20,
        borderTopWidth: 3,
        borderTopColor: '#ccc',
    }
})
