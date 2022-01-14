import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Modal, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// Importação da lista de registros
import RecordList from './src/components/RecordList';

export default function App() {
  
  // const [record, setRecord] = useState([
  //   {key: 1, firstName: 'Lucas', lastName: 'Nunes', age: 23, gender: 'Masculino', weight: 75.65, height: 1.74, imc: 22.20},
  // ]);
  const [record, setRecord] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState([
    {firstName: '', lastName: '', age: '', gender: '', weight: '', height: ''},
  ])

  function addItems() {
    // if (!input) return; // CORRIGIR

    const data = { // CORRIGIR -> Não tá pegando os campos do form
      key: Math.random(),
      firstName: input.firstName,
      lastName: input.lastName,
      age: input.age,
      gender: input.gender,
      weight: input.weight,
      height: input.height,
      // key: 1,
      // firstName: 'Lucas',
      // lastName: 'Renan',
      // age: 23,
      // gender: 'Masculino',
      // weight: 75.45,
      // height: 1.74
    };

    setRecord([...record, data])
    setInput('');
    setOpen(false);
  }

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

      <Modal animationType='slide' transparent={false} visible={open}>
        <View style={styles.modalArea}>
          <TouchableOpacity style={{width: 35, height: 35, margin: 5}} onPress={() => setOpen(false)}>
            <Ionicons name="arrow-back-outline" size={35} color={'#f4f1de'}/>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Ficha do Paciente</Text>
          <View style={styles.inputArea}>
            <View style={{flexDirection: 'row'}}>
              <TextInput 
                style={styles.input}
                value={input.firstName}
                onChangeText={(name) => setInput(name)}
                placeholder='Nome'
              />
              <TextInput 
                style={styles.input}
                value={input.lastName}
                onChangeText={(lastName) => setInput(lastName)}
                placeholder='Sobrenome'
              />
            </View>
            <TextInput 
              style={styles.input}
              value={input.age}
              onChangeText={(age) => setInput(age)}
              placeholder='Idade'
            />
            <TextInput 
              style={styles.input}
              value={input.gender}
              onChangeText={(gender) => setInput(gender)}
              placeholder='Sexo'
            />
            <View style={{flexDirection: 'row'}}>
              <TextInput 
                style={styles.input}
                value={input.height}
                onChangeText={(gender) => setInput(gender)}
                placeholder='Altura (m)'
              />
              <TextInput 
                style={styles.input}
                value={input.weight}
                onChangeText={(gender) => setInput(gender)}
                placeholder='Peso (Kg)'
              />
            </View>
            <TouchableOpacity onPress={addItems} style={styles.btnModal}>
              <Text style={styles.btnTextModal}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setOpen(true)} style={styles.btnRegister}>
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
  },
  modalArea: {
    flex: 1,
    backgroundColor: '#3d405b',
  },
  modalTitle: {
    color: "#f4f1de",
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center'
  },
  inputArea: {
    flex: 1
  },
  input: {
    backgroundColor: "#f4f1de",
    marginVertical: 10,
    marginHorizontal: 9,
    padding: 6,
    borderRadius: 5,
  },
  btnModal: {
    backgroundColor: '#e07a5f',
    padding: 7,
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  btnTextModal: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3d405b'
  }
})