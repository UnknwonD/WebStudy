import React, { useState } from "react";
import { Button, Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authService } from "../../fbase";
import Visualization from "../components/Visualization";

const user = authService.currentUser;

function Chart() {

    const [Scores, setScores] = useState([]);


    return (
    <SafeAreaView>
        <ScrollView>
            <Text>점수를 입력하세요</Text>
            <TextInput placeholder='1월' onChangeText={() => setScores()} />
            <Visualization />
        </ScrollView>
    </SafeAreaView>
    );
  };

  export default Chart;

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