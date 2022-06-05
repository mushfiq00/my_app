import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const InputTextComp = ({ placeholder, icon, onChange, value }) => {
    return (
        <View style={styles.container} >
            <Image source={icon} style={styles.icon} />
            <TextInput style={styles.input} placeholder={placeholder}  onChangeText={onChange} value={value} />
        </View>
    )
}

export default InputTextComp

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        height: 15,
        width: 15,
        marginRight: 10
    },
    input: {
        width: '100%'
    }
})