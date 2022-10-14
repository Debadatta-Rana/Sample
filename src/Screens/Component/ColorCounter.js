import React from "react";
import { View,Text,Button,StyleSheet } from "react-native";

const ColorCounter =({color})=>{
    return(
        <View>
             <Text>{color}</Text>
             <Button title={`Increased ${color}`}/>
             <Button title={`decreased ${color}`}/>
      </View>
    );
}
const styles =StyleSheet.create();

export default ColorCounter;