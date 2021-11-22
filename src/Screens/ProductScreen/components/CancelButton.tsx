import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DemoContext } from '../../../context/DemoContext';


interface ICancelButton {

    onPress: () => void;
}
export const CancelButton: React.FC<ICancelButton> = (props) => {
    const context = React.useContext(DemoContext)
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable onPress={props.onPress} onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}}>
            <View style={styles.button}>
            <Text style={[styles.label,
                isPressed?styles.pressIn:styles.default]}> Cancel </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 15
    },
    label: {
        color: 'gray',
        fontSize: 30,
        fontWeight: 'bold',
    },
    pressIn: {
        color: 'blue',
    },
    default: {
    },
});