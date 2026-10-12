import { useRouter } from "expo-router";
import { Button } from "expo-router/build/react-navigation";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const navRouter = useRouter();
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text>Usuario</Text>
      <TextInput
      style={styles.input}>
      </TextInput>
      <Text>Senha</Text>
      <TextInput
      style={styles.input}
      secureTextEntry={true}
      defaultValue={password}
      onChangeText={setPassword}>
      </TextInput>
      <Button
      style={styles.button}
      onPressOut={() => navRouter.push("/dashboard")}>
        Acessar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 4,
    paddingVertical: 2,
    margin: 8,
  },
  button: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 8,
    backgroundColor: "#c8c8c8",
    color: "#646464",
  },
});
