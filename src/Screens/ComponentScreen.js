 import React from 'react';
 import {
    Text,
    StyleSheet,
    View,
    Button
 } from 'react-native'; 

 const ComponentScreen = ({navigation}) => {
    const name = 'Shikhar';
   // console.log(props.navigation);
    return(
        <View>
            <Text style={styles.textStyle}>Getting Started with react native</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>

            <Button onPress={() =>navigation.navigate('ListScreen')}
                 title="Go To List demo">

                 </Button>
        </View>

    
        
    );
 };

 const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40                                                       
    },
    subHeaderStyle: {
        fontSize: 30
    }
});

export default ComponentScreen