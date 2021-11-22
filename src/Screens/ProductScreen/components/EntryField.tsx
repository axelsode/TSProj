import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface IEntryField {
    label: string;
    OnTextChanged?: (text: string) => void;
    defaultValue?: string;
}

export const EntryField: React.FC<IEntryField> = (props) => {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput defaultValue={props.defaultValue} onChangeText={props.OnTextChanged} style={styles.username} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        usernameContainer: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'pink',
            paddingHorizontal: 20,
            marginVertical: 40,
            marginHorizontal: 20
        },
        username: {
            backgroundColor: 'gray',
            fontSize: 18,
            borderColor: '#fff',
            borderWidth: 2,
            alignItems: 'center',
            height: 40,
            borderRadius: 10,
        },
        label: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            margin: 5,
        },
    }
);