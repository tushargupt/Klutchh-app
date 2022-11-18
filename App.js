import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Card from './components/Card';
import PlayerCard from './components/PlayerCard';
import { Component } from 'react';
import Load from './components/Load';

export default function App() {


  return (

    <View style={styles.container}>
      <Load />
      <StatusBar style="light" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211134',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
