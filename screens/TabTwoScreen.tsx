import * as React from 'react';
import { StyleSheet, TextInput, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';

export default function TabTwoScreen() {


  return (
    <KeyboardAvoidingView behavior='position' style={styles.container}>
      <TouchableWithoutFeedback>
      <Formik
        initialValues={{title: '', name: '', cost: '', description: ''}}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(props) => (
          <View>

            <Text style={styles.title}>{props.values.title}</Text>

            <TextInput style={styles.separator}/>

            <TextInput
            style={styles.input}
            placeholder="Titulo"
            placeholderTextColor="gray"
            onChangeText={props.handleChange('title')}
            value={props.values.title} />

            <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="gray"
            onChangeText={props.handleChange('name')}
            value={props.values.name} />


            <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder="R$ 9999,99"
            placeholderTextColor="gray"
            onChangeText={props.handleChange('cost')}
            value={props.values.cost} />

            <TextInput
            multiline={true}
            style={styles.input_description}
            placeholder="Descricao"
            placeholderTextColor="gray"
            onChangeText={props.handleChange('description')}
            value={props.values.description} />

            <Button style={styles.button} color='gray' icon="check" mode="contained" onPress={props.handleSubmit}>Submit</Button>
          </View>
        )}
      </Formik>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    alignContent: "center",
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 60,
    width: 300,
    color: '#000',
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  input_description: {
    height: 60,
    width: 300,
    color: '#000',
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: "bottom",
  },
  button: {
    bottom: -50,
  }
});
