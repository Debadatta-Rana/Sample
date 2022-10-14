import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput}from 'react-native';

const TextScreen =()=>{
    const [name,setName,Password,setPassword] =useState('');
    return(
        <View>
            <Text>Enter Name::</Text>
            <Text>Enter Password::</Text>
            <TextInput  style={styles.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            value= {name}
            value1={Password}
            onChangeText={newValue=>setName(newValue)}
            onChangeText1={newValue=>setPassword(newValue)}
            />
            <Text>My name is {name}</Text>
            {false ? <Text>That was true</Text> : null}
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin:15,
        borderColor: 'red',
        borderWidth: 1
    }
});
export default TextScreen;