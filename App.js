 import React from "react";
 import HomeScreen from "./src/Screens/HomeScreen";
 import ComponentScreen from './src/Screens/ComponentScreen';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import ListScreen from "./src/Screens/ListScreen";
 import ImageScreen from "./src/Screens/ImageScreen";
 import CounterScreen from "./src/Screens/CounterScreen";
 import ColorScreen from "./src/Screens/ColorScreen";
 import SquareScreen from "./src/Screens/SquareScreen";
 import TextScreen from "./src/Screens/TextScreen";
 import BoxScreen from "./src/Screens/BoxScreen";

const App =()=>{

    const Stack = createNativeStackNavigator();
    return (
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ComponentScreen" component={ComponentScreen}/>
                <Stack.Screen name="ListScreen" component={ ListScreen }/>
                <Stack.Screen name="ImageScreen" component={ImageScreen}/>
                <Stack.Screen name="CounterScreen" component={CounterScreen}/>
                <Stack.Screen name="ColorScreen" component={ColorScreen}/>
                <Stack.Screen name="SquareScreen" component={SquareScreen}/>
                <Stack.Screen name="TextScreen"  component={TextScreen}/>
                <Stack.Screen name="BoxScreen"  component={BoxScreen}/>
         
        </Stack.Navigator>
        </NavigationContainer>
    
    );

}
 export default App;