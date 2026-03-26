import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SignUp() {
  return (
    <View>
      <Text> sign up</Text>
      <Button title="sign in" onPress={() => router.push("/sign-in")} />
    </View>
  );
}
