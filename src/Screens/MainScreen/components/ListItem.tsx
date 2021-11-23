import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DemoContext } from '../../../context/DemoContext';
import { Foundation } from '@expo/vector-icons';

export interface IListItem {
   
    name: string
    price: number
    type: string
    onPress?: () => void;
}
export const ListItem : React.FC<IListItem> = (props) => {
    const context = React.useContext(DemoContext)
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable onPress={props.onPress} onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}}>
            <View style={[styles.button, isPressed?styles.pressIn:styles.default]}>
            
            <Text style={styles.label}> {props.name} </Text>        
            <Text style={styles.label}> {props.price} </Text>   
            <Text style={styles.label}
                > {props.type} </Text>   
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0ee',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15
    },
    label: {
        color: 'black',
        fontSize: 30,
       
    },
    pressIn: {
        color: 'gray',
    },
    default: {
    },
});