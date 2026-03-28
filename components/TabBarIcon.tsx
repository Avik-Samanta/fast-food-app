import { TabBarIconProps } from "@/type";
import cn from "clsx";
import { Image, Text, View } from "react-native";

export default function TabBarIcon({ focused, icon, title }: TabBarIconProps) {
  return (
    <View className="tab-icon">
      <Image
        source={icon}
        className="size-7"
        resizeMode="contain"
        tintColor={focused ? "#FE8C00" : "5D5F6D"}
      />
      <Text
        className={cn(
          "text-sm font-bold",
          focused ? "text-primary" : "text-gray-200",
        )}
      >
        {title}
      </Text>
    </View>
  );
}
