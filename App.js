import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// Importação da lista de registros
import RecordList from './src/components/RecordList';

export default function App() {
  
  const [record, setRecord] = useState([
    {key: 1, name: 'Luca Renan', weight: 74.34, height: 1.74, imc: 22.20},
    {key: 2, name: 'Renan', weight: 70.00, height: 1.82, imc: 20.10}
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f4f1de' barStyle="light-content" />
      
      <View>
        <Text style={styles.title}>Ficha Médica</Text>
      </View>

      <FlatList
        data={record}
        keyExtractor={ (item) => String(item.key) }
        renderItem={ ({ item }) => <RecordList data={item} />}
      />

      <TouchableOpacity style={styles.btnRegister}>
        <Ionicons name='document-text-outline' size={30} color={'#f4f1de'}/>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f1de'
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
    color: '#3d405b'
  },
  btnRegister: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#3d405b',
    width: 45,
    height: 45,
    padding: 25,
    borderRadius: 30,
    margin: 25,
    zIndex: 9,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3
    },
  }
})