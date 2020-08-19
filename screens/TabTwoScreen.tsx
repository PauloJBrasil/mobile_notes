import * as React from 'react';
import { StyleSheet, TextInput, Text, View, Animated } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = (value) => setShowResults(value)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{title: '', name: '', cost: '', description: ''}}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(props) => (
          <View>

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

            <TextInput style={styles.separator}/>

            { showResults ? <TextInput
            multiline={true}
            style={styles.input_description}
            placeholder="Descricao"
            placeholderTextColor="gray"

            onChangeText={props.handleChange('description')}
            value={props.values.description} /> : null }

            { showResults ? <Button style={styles.button_description} color='#e2f4ed' icon="arrow-up" mode="contained" onPress={() => onClick(false)}>Description Hide</Button>:
            <Button style={styles.button_description} color='#e2f4ed' icon="arrow-down" mode="contained" onPress={() => onClick(true)}>Description Show</Button>
}
            <TextInput style={styles.separator}/>

            <Button style={styles.button} color='lightblue' icon="check" mode="contained" onPress={props.handleSubmit}>Adicionar</Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  },
  button_description : {
    alignContent: 'center',
    alignSelf: 'center',
    width: 200,
    bottom: -50,
  },
});
