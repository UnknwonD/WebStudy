import React from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";
import { authService } from "../../fbase";

const user = authService.currentUser;

function Chart() {
    return (
    <ScrollView>
      <Text>Spaces for chart</Text>
    </ScrollView>
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