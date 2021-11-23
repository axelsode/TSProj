import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DemoContext } from '../../../context/DemoContext';
import { AntDesign } from '@expo/vector-icons'; 

interface IDeleteButton {

    onPress: () => void;
}
export const DeleteButton: React.FC<IDeleteButton> = (props) => {
    const context = React.useContext(DemoContext)
    const [isPressed, setIsPressed] = useState(false);
    

    return (
        <Pressable onPress={props.onPress} onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}}>
            <View style={[styles.button, isPressed?styles.pressIn:styles.default]}>
            <Text style={[styles.label,
                isPressed?styles.pressIn:styles.default]}> Delete </Text>
            <AntDesign name="delete" size={24} color="white" />
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
        backgroundColor: 'red',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15
    },
    label: {
        color: 'white',
        fontSize: 30,
       
    },
    pressIn: {
        color: 'gray',
    },
    default: {
    },
});