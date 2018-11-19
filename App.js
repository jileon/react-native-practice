import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { black, red } from 'ansi-colors';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '' ,
      inputs: []
    };
  }


  inputTextChange=(val)=>{
    this.setState({text: val})
  }

  handleButton=()=>{
if(this.state.text.trim()===""){
  return;
}

this.setState(prevState=>{
  return{
inputs: prevState.inputs.concat(prevState.text)
  };
})
  }
  render() {
    const inputsOutput = this.state.inputs.map((item, index)=>(
      <Text key={index}>{item}</Text>
    ) )

    return (
      <View style={styles.container}>
      <View style={styles.textView}>
      <TextInput 
       style={styles.textInput}
       placeholder= 'a useless place holder'
       value={this.state.text} 
       onChangeText={this.inputTextChange}/>
      <Button 
      color= "black"
      style={styles.button}
      onPress={this.handleButton}
      title='Add'/>
      </View>
        {inputsOutput}
      <View>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textView:{
    // flex:1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput:{
    width:'70%', 
    borderBottomColor: "blue",
    borderBottomWidth:1, 
  },
  button:{
    width: "30%"
  }

});
