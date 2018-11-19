import React from 'react';
import { Button, StyleSheet } from 'react-native';

const MyButton = (props) => <Button 
color="black" style={styles.button} 
onPress={props.onPressButton} 
title="Add" />;

export default MyButton;

const styles = StyleSheet.create({
	button: {
		width: '30%'
	}
});
