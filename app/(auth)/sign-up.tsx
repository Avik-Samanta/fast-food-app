import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { createUser } from "@/lib/appwrite";
import useAuthStore from "@/store/auth.store";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function SignUp() {
  const { fetchAuthenticatedUser } = useAuthStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    if (!form.name || !form.email || !form.password)
      return Alert.alert(
        "error",
        "Please enter valid name, email and password",
      );
    setIsSubmitting(true);
    try {
      await createUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      await fetchAuthenticatedUser();
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-10 bg-white mt-5 p-5">
      <CustomInput
        placeholder="Enter your name"
        value={form.name}
        label="Name"
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
      />
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        label="Email"
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        label="Password"
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        secureTextEntry={true}
      />

      <CustomButton title="Sign Up" isLoading={isSubmitting} onPress={submit} />

      <View className="flex flex-row justify-center gap-2 mt-3">
        <Text className="base-regular text-gray-100">
          Alreday have an account?
        </Text>
        <Link href={"/sign-in"} className="base-bold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
}
