// import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity,Alert } from 'react-native';
// import { Formik } from 'formik';

const styles = StyleSheet.create({
        labels:          {
                    borderRightColor:'blue',
                    borderRightWidth:2,
                    borderLeftColor:'blue',
                    borderLeftWidth:2,
                    borderTopColor:'blue',
                    borderTopWidth:2,
                    borderBottomColor:'blue',
                    borderBottomWidth:2,
                  },
        head:{
          fontSize:40,
          fontWeight:'bolder',
          fontFamily:'lucida grande',
        },
        submit:{
          backgroundColor:'#facade',
          alignItems:'center',
          padding:10,
          marginTop:10,
        }
});

export default function Form(props){
  const [name,setName] = useState('');
  const [organization,setOrganization] = useState('');
  const [ph,setPh] = useState('');
  const [email,setEmail] = useState('');
  const [requirements,setRequirements] = useState('');
  const [service,setService] = useState('');
  const [machine,setMachine] = useState('');

  const validate = ()=>{
    let valid = false;
    if(valid){
      props.submit();
    }else{
      Alert.alert('Not Valid');
    }
  };
    return (
        <View>
        <Text style={styles.head}>My Form</Text>
            <Text>Name : </Text>
                <TextInput 
                  style={
                    styles.labels
                  }
                  onChangeText={(text)=>setName(text)}
                />

            <Text>Organization : </Text>
                <TextInput style={
                  styles.labels
                }
                onChangeText={(text)=>setName(text)}
                />

            <Text>Phone number : </Text>
                <TextInput style={
                  styles.labels
                }
                onChangeText={(text)=>setPh(text)}
                />

            <Text>Email : </Text>
                <TextInput style={
                  styles.labels
                }
                onChangeText={(text)=>setEmail(text)}
                />

            <Text>Requirements : </Text>
                <TextInput style={
                  styles.labels
                }
                onChangeText={(text)=>setRequirements(text)}
                />

            <Text>Service : </Text>
                <TextInput style={
                  styles.labels
                }
                onChangeText={(text)=>setService(text)}
                />

            <Text>Machine : </Text>
                <TextInput style={
                  styles.labels
                }
                onChangeText={(text)=>setMachine(text)}
                />

            <TouchableOpacity style={styles.submit} onPress={validate}>
              <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

