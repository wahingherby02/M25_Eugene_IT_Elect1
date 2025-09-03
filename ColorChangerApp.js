import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState('black'); 

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="White" onPress={() => setBgColor('#ffffff')} />
      
      <Button title="Light Blue" onPress={() => setBgColor('#add8e6')} />
      
      <Button title="Light Green" onPress={() => setBgColor('#90ee90')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }
});