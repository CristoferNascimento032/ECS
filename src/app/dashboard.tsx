import { useRouter } from "expo-router";
import { Button } from "expo-router/build/react-navigation";
import { StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
  const navRouter = useRouter();
  return (
    <View style={styles.container}>
      <Text>Bem vindo a tela principal!</Text>
      <Button
      style={styles.button}
      onPressOut={() => navRouter.push("/")}>
        Retornar ao login
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
  button: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    margin: 8,
    backgroundColor: "#c8c8c8",
    color: "#646464",
  },
});