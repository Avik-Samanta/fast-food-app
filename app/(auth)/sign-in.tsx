import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SignIn() {
  return (
    <View>
      <Text>sign in</Text>
      <Button title="sign up" onPress={() => router.push("/sign-up")} />
    </View>
  );
}
