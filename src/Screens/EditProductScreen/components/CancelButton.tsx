import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DemoContext } from '../../../context/DemoContext';
import { Foundation } from '@expo/vector-icons';
import { translate } from '../../../helpers/translation/translations';
import { tokens } from '../../../helpers/translation/appStructure';

interface ICancelButton {

    onPress: () => void;
}
export const CancelButton: React.FC<ICancelButton> = (props) => {
    const context = React.useContext(DemoContext)
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable onPress={props.onPress} onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}}>
            <View style={[styles.button, isPressed?styles.pressIn:styles.default]}>
            
            <Text style={[styles.label,
                isPressed?styles.pressIn:styles.default]}> {translate(tokens.screens.screenMain.CancelText)} </Text>        
            <Foundation style={[isPressed?styles.pressIn:styles.default]} name="prohibited" size={30} color="white" />
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
        backgroundColor: '#5c5a5a',
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