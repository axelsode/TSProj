import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Context } from '../../../context/Context';
import { Foundation } from '@expo/vector-icons';
import { translate } from '../../../helpers/translation/translations';
import { tokens } from '../../../helpers/translation/appStructure';

export interface IListItem {
   
    name: string
    price: number
    type: string
    
    onPress?: () => void;
}
export const ListItem : React.FC<IListItem> = (props) => {
    const context = React.useContext(Context)
    const [isPressed, setIsPressed] = useState(false);
    const type = (props.type=="Peripheral")?translate(tokens.screens.screenMain.TypeType1): translate(tokens.screens.screenMain.TypeType2)
    return (
        <Pressable onPress={props.onPress} onPressIn={()=>{setIsPressed(true)}} onPressOut={()=>{setIsPressed(false)}}>
            <View style={[styles.button, isPressed?styles.pressIn:styles.default]}>
            
            <Text style={styles.label}> {props.name} </Text>     
            <Text style={styles.label}> {type} </Text>    
            <Text style={styles.label}> $ {props.price} </Text>   
              
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
        justifyContent: 'space-between',
        backgroundColor: '#ecf0ee',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15
    },
    label: {
        color: 'black',
        fontSize: 20,
       
    },
    pressIn: {
        color: 'gray',
    },
    default: {
    },
});