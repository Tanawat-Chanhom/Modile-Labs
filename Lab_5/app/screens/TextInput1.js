import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';

const UselessTextInput = (props) => {
    return (
        <TextInput
        {...props}
        editable
        maxLength={40}
        />
    );
}

export default function TextInput1() {
    const [value, onChangeText] = React.useState('พิมพ์ช้อความที่นี่');
    return (
        <View
            style={{
                backgroundColor: value,
                borderBottomColor: '#000000',
                borderBottomWidth: 1,
            }}>
            <UselessTextInput
                multiline
                numberOfLines={4}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    )
}
