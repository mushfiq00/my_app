import { StyleSheet, Text, View, Alert } from 'react-native'

const alertMsg = (title, message, onCancel, onOk) => {

    Alert.alert(
        title,
        message,
        [
            {
                text: "Cancel",
                onPress: onCancel,
                style: "cancel"
            },
            { text: "OK", onPress: onOk }
        ])

}

export default alertMsg
