// SignUp.js
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import firebase from "./firebaseConfig";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate("HomeScreen");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} value={email} />
      <Text>Password:</Text>
      <TextInput onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Sign Up" onPress={signUp} />
    </View>
  );
};

export default SignUp;
