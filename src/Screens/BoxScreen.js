import React from "react";
import {
    Text,View,StyleSheet
}from 'react-native';

const BoxScreen =()=>{
    return(
        <View style={styles.ParentStyle}>
        
          <View style={styles.textOneStyle}/>
          <View style={styles.textTwoStyle}/>
          <View style={styles.textThreeStyle}/>

        </View>
    )
}
const styles=StyleSheet.create({
    ParentStyle: {
        borderWidth:3,
        borderColor:'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: "space-between"
       // alignItems: "center"
    },
    textOneStyle: {
       //borderWidth: 2,
       borderColor:'red',
      // margin: 20,
      // flex: 4
      height: 100,
      width: 50
    },
    textTwoStyle: {
      //  borderWidth: 2,
        borderColor:'green',
        marginTop: 50,
       // flex:4
      // alignSelf: "stretch"
      height: 100,
      width: 50
     },
     textThreeStyle: {
        //borderWidth: 2,
        borderColor:'blue',
        //margin: 20,
        //flex: 2
        height: 100,
        width: 50
     }
});
export default BoxScreen;
