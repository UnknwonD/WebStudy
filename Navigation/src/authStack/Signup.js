import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { authService } from "../../fbase";
import { createUserWithEmailAndPassword } from "@firebase/auth";

export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPsw, setConfirmPsw] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (email==="") {
            setError("Email cannot be empty");
        } else if(password.length < 6) {
            setError("password should be more than 6 characters");
        } else if (password !== confirmPsw) {
            setError("Incorrect with password !");
        }  else {
            setError("");
        }
    }, [email, password, confirmPsw, error])

    const onPressSgu = async (event) => {
        event.preventDefault();
        if(error !== ""){
            Alert.alert(error);
        } else {
            try {
            let data = await createUserWithEmailAndPassword(authService, email, password);
            Alert.alert("Successfully Sign up !");
            }catch (error) {
                console.log(error);
            }
        }
    };


    return(
        <View style={{flex:1}}>
            <View style={styles.upperCtn}>
                <Text style={{fontSize:30}}>회원가입 정보</Text>
            </View>

            <View style={styles.middleCtn}>
                <TextInput 
                    style={styles.lgnbox} 
                    keyboardType='email-address' 
                    placeholder="Email"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput 
                    style={styles.lgnbox} 
                    placeholder="Password" 
                    secureTextEntry={true}
                    value={password} 
                    onChangeText={(password) => setPassword(password)}
                    />
                <TextInput 
                    style={styles.lgnbox} 
                    placeholder="Confirm Password"
                    ecureTextEntry={true} 
                    value={confirmPsw}
                    onChangeText={(confirmPsw) => setConfirmPsw(confirmPsw)}
                    />
            </View>

            <View style={styles.downCtn}>
                <TouchableOpacity onPress={onPressSgu}>
                    <Text>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({ 
    upperCtn: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#67E372',
    },
    middleCtn: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#C8E367',
    },
    downCtn: {
        flex:2,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#67BAE3'
    },
    lgnbox: {
        flex: 0.5,
        backgroundColor: 'grey',   
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth:1,
      }, 
});