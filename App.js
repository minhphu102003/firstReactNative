import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { useState } from 'react';


export default function App() {
  // ! Quản lí giá trị thay đổi của text trong ô input
  const [textInput, setTextInput] = useState('');

  // khởi tạo một danh sách rỗng để quản lý danh sách các công việc 
  const [toDoList, setToDoList] = useState([]);

  function textInputChange(textChange){
    setTextInput(textChange);
  }

  function addToDo(){
    setToDoList((currentToDoList)=>[...currentToDoList,textInput]);
  }
  return (
    <View style ={styles.container}> 
      <StatusBar barStyle="dark-content" />
      <View style={styles.inputContainer}>
        <TextInput onChangeText={textInputChange} style={styles.textInput} placeholder='your tode'></TextInput>
        <Button onPress={addToDo} title='add todo'></Button>
      </View>
      <View style={styles.containerToDoList}>
        {toDoList.map((todo)=> <Text key={todo}>{todo}</Text>)}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding:10,
    paddingTop:100,
    backgroundColor: '#9c9c9c',
    flex:1
  },
  inputContainer:{
    flexDirection: 'row',
    marginBottom: 50,
    borderBottomWidth:1,
    borderBottomColor: 'white',
    paddingBottom: 50
  },
  textInput:{
    borderWidth: 2,
    borderColor: 'blue',
    padding: 8,
    paddingRight: 8,
    width: '70%'
  },
  containerToDoList:{
    margin:10,
    flex:4
  }
});