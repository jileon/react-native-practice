import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import AddItem from './src/addItem';
import ListItem from './src/listItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '' ,
      inputs: []
    };
  }

onItemDelete= (ind)=>{
this.setState(prevState=>{
  return {
    inputs: prevState.inputs.filter((item, index)=>{
      return ind !== index;
    })
  };
});
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
      <ListItem key={index} input={item}
      onItemPress={()=>this.onItemDelete(index)}
      />
    ) )

    return (
     
      <View style={styles.container}>
        <AddItem 
        value={this.state.text} 
        onChangeText={this.inputTextChange}
        onPressButton={this.handleButton}
        />
         <ScrollView style={styles.outputContainer}>
        { <View >
        {inputsOutput}
        </View> }
        </ScrollView>
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
 
  outputContainer:{
    width: "100%"
  }

});
