import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Context } from '../../../context/Context';
import { Feather } from '@expo/vector-icons';
import { translate } from '../../../helpers/translation/translations';
import { tokens } from '../../../helpers/translation/appStructure';

interface IAddButton {

    onPress: () => void;
}
export const AddButton: React.FC<IAddButton> = (props) => {
    const context = React.useContext(Context)
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable onPress={props.onPress} onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}}>
            <View style={[styles.button, isPressed?styles.pressIn:styles.default]}>
            <Text style={[styles.label,
                isPressed?styles.pressIn:styles.default]}> {translate(tokens.screens.screenMain.EditText)} </Text>
            <Feather style={[
                isPressed?styles.pressIn:styles.default]}name="download" size={30} color="white" />
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
        backgroundColor: 'green',
        borderColor: 'green',
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