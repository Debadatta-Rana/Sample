import React from 'react';
import ImageDetails from './Component/ImageDetails';
import{
 View,
 Text,
 StyleSheet
}from 'react-native';

const ImageScreen = () =>{
    return(
        <View>
            <Text>Image Screen</Text>

        <ImageDetails 
            title="Forest" 
              imageSource={require('../assets/Images/download.jpg')}
              score={10}
              />
              
              <ImageDetails 
            title="Beach" 
              imageSource={require('../assets/Images/beach.jpg')}
              score={7}
              />
              <ImageDetails 
            title="mountain" 
              imageSource={require('../assets/Images/mountain.jpg')}
              score={5}
              />
              
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;