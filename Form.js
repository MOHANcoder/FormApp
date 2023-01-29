// import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { Formik } from 'formik';

const styles = StyleSheet.create({
    labels: {
        borderRightColor: 'blue',
        borderRightWidth: 2,
        borderLeftColor: 'blue',
        borderLeftWidth: 2,
        borderTopColor: 'blue',
        borderTopWidth: 2,
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        width: '100%',
        paddingTop:10,
    },
    head: {
        fontSize: 40,
        fontWeight: 'bolder',
    },
    submit: {
        backgroundColor: '#facade',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,
    },
    container: {
        width: '70%',
    },
});

export default function Form(props) {
    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('');
    const [ph, setPh] = useState('');
    const [email, setEmail] = useState('');
    const [requirements, setRequirements] = useState('');
    const [service, setService] = useState('');
    const [machine, setMachine] = useState('');

    const validate = () => {
        let valid = false;
        let re = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
        if (re.test(email)) {
            re = new RegExp(/^\w{1,}$/g);
            if (re.test(name)) {
                re = new RegExp(/^\d{10}$/g);
                if (re.test(ph)) {
                    valid = true;
                }else{
                    Alert.alert("Not a valid Phone number");
                }
            }else{
                Alert.alert("Not a valid name");
            }
        }else{
            Alert.alert("Not a valid email");
        }
        if (valid) {
            Alert.alert('Valid');
            props.submit();
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.head}>My Form</Text>
            <Text>Name : </Text>
            <TextInput
                style={
                    styles.labels
                }
                onChangeText={(text) => setName(text)}
            />

            <Text>Organization : </Text>
            <TextInput style={
                styles.labels
            }
                onChangeText={(text) => setName(text)}
            />

            <Text>Phone number : </Text>
            <TextInput style={
                styles.labels
            }
                onChangeText={(text) => setPh(text)}
            />

            <Text>Email : </Text>
            <TextInput style={
                styles.labels
            }
                onChangeText={(text) => setEmail(text)}
            />

            <Text>Requirements : </Text>
            <TextInput style={
                styles.labels
            }
                onChangeText={(text) => setRequirements(text)}
            />

            <Text>Service : </Text>
            <TextInput style={
                styles.labels
            }
                onChangeText={(text) => setService(text)}
            />

            <Text>Machine : </Text>
            <TextInput style={
                styles.labels
            }
                onChangeText={(text) => setMachine(text)}
            />

            <TouchableOpacity style={styles.submit} onPress={validate}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}
