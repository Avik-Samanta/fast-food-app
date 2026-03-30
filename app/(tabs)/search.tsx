import seed from "@/lib/seed";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  return (
    <SafeAreaView>
      <Text>search page</Text>
      <Button
        title="seed"
        onPress={() => {
          seed().catch((error) => console.log("failed to seed the db", error));
        }}
      />
    </SafeAreaView>
  );
}
