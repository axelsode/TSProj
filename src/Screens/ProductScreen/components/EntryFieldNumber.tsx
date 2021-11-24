import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface IEntryFieldNumber {
    label: string;
    OnTextChanged?: (text: string) => void;
    defaultValue?: string;
}

export const EntryFieldNumber: React.FC<IEntryFieldNumber> = (props) => {
    return (
        <View style={styles.input}>
                <Text style={styles.label}>{props.label}</Text>
                <TextInput 
                placeholder={props.defaultValue?.toString()} 
                onChangeText={props.OnTextChanged?.toString} 
                style={styles.username}
                keyboardType="phone-pad"
                />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        username: {
            backgroundColor: '#ecf0ee',
            fontSize: 18,
            alignItems: 'center',
            height: 50,
        },
        label: {
            color: 'black',
            fontSize: 10,
            fontWeight: 'bold',
            paddingLeft: 5,
        },input: {
            borderColor: 'black',
            borderWidth: 2,
            padding: 10,
            margin: 10,
            width: '80%',
            borderRadius: 15,
            backgroundColor: '#ecf0ee',
        },
    }
);