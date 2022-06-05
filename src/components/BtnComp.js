import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const BtnComp = ({ onPress, title, bgdColor, labelColor }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={[styles.btn, { backgroundColor: bgdColor }]} >
                <Text style={[styles.btnLbl, (labelColor && { color: labelColor })]} >{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BtnComp

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#FFFFFF",
        marginVertical: 15,
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLbl: {
        color: 'black',
        fontSize: 18,
        fontWeight: "500"

    }
})