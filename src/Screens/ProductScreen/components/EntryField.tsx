import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface IEntryField {
    label: string;
    OnTextChanged?: (text: string) => void;
    defaultValue?: string;
    
    
}

export const EntryField: React.FC<IEntryField> = (props) => {
    return (
        <View >
            <Text style={styles.label}>{props.label}</Text>
            <TextInput defaultValue={props.defaultValue} 
            onChangeText={props.OnTextChanged} style={styles.username} 
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        username: {
            backgroundColor: '#ecf0ee',
            fontSize: 18,
            borderColor: 'black',
            borderWidth: 2,
            alignItems: 'center',
            marginVertical: 30,
            height: 50,
            borderRadius: 15
        },
        label: {
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            margin: 5,
            
            paddingLeft: 20,
        },
    }
);