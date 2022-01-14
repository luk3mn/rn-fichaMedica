import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function RecordList({ data }) {
  return (
    <View style={styles.listArea}>
      <View style={{flex: 1}}>
        <Text style={styles.record}>Nome: {data.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.record}>Peso: {data.weight}</Text>
          <Text style={styles.record}>Altura: {data.height}</Text>
        </View>
        <Text style={styles.record}>IMC: {data.imc}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="trash-outline" size={40} color={'#3d405b'}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  listArea: {
    flex: 1,
    margin: 8,
    flexDirection: 'row',
    justifyConent: 'center',
    alignItems: 'center',
    backgroundColor: '#e07a5f',
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: '#e07a5f',
    shadowOpacity: 0.2,
    shadowOffset: {
        width: 1,
        height: 3,
    },
  },
  record: {
    color: '#f4f1de',
    fontSize: 18,
    paddingLeft: 8,
    paddingRight: 20,
    fontWeight: '600'
  }
})