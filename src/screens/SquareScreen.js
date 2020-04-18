import React, { useState }from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] =useState(0);
  const [green, setGreen] =useState(0);
  const [blue, setBlue] =useState(0);

  return (
    <View>
      <ColorCounter 
        onIncrease={() => setRed(red + 1)} 
        onDecrease={() => setRed(red - 1)} 
        color='Red' 
      />
      <ColorCounter 
        onIncrease={() => setRed(blue + 1)} 
        onDecrease={() => setRed(blue - 1)} 
        color='Blue' 
      />
      <ColorCounter 
        onIncrease={() => setRed(green + 1)} 
        onDecrease={() => setRed(green - 1)} 
        color='Green' 
      />
      <View 
        style={{ 
          height: 150, 
          width: 150, 
          backgroundColor: `rgb(${red}, ${green}, ${blue})` 
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default SquareScreen;