import { updateProfile } from "@firebase/auth";
import React, {useState} from "react";
import { Button, Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authService } from "../../fbase";



export default function Setting() {

    const [nickname, setNickname] = useState("");
    const [goalCo, setGoalCo] = useState("");

    const onPressSaveName = () => {
        updateProfile(authService.currentUser, {
            displayName: nickname
        }).then( () =>{
            console.log(authService.currentUser.displayName);
        }).catch((error) => {
            console.log(error);
        })
    };
    
    return (
            <ScrollView>
                <SafeAreaView>
                    <View style={styles.upperCtn} >
                        <Text>이름 변경</Text>
                        <TextInput 
                            keyboardType='default' 
                            placeholder="NickName"
                            value={nickname}
                            onChangeText={(nickname) => {
                                setNickname(nickname);
                                console.log({nickname});
                            }}
                        />
                        <Button title="저장" onPress={onPressSaveName} />
                        <Text>목표 대학 설정</Text>
                        <TextInput 
                            keyboardType='default' 
                            placeholder="College"
                            value={goalCo}
                            onChangeText={(goalCo) => {
                                setGoalCo(goalCo);
                                console.log({goalCo});
                            }}
                        />
                        
                    </View>
                    <View style={styles.middleCtn}>
                    </View>
                </SafeAreaView>
            </ScrollView>
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
        flex:3,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#C8E367',
    },
      
});