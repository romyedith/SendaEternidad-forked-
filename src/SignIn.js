// SignIn.js
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import firebase from "./firebaseConfig";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
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
      <Button title="Sign In" onPress={signIn} />
      <Button title="Register" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
};

export default SignIn;
