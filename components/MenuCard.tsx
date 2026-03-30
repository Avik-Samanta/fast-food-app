import { MenuItem } from "@/type";
import { Image, Platform, Text, TouchableOpacity } from "react-native";

export default function MenuCard({
  item: { $id, image_url, name, price },
}: {
  item: MenuItem;
}) {
  const imageUrl =
    typeof image_url === "string"
      ? image_url.trim()
      : String((image_url as unknown as { href?: string })?.href ?? "").trim();

  return (
    <TouchableOpacity
      className="menu-card"
      style={
        Platform.OS === "android"
          ? { elevation: 10, shadowColor: "#878787" }
          : {}
      }
    >
      <Image
        source={{ uri: imageUrl }}
        className="size-32 absolute -top-10"
        resizeMode="contain"
      />
      <Text
        className="text-center base-bold text-dark-100 mb-2"
        numberOfLines={1}
      >
        {name}
      </Text>
      <Text className="text-gray-200 body-regular mb-4">From ${price}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text className="paragraph-bold text-primary">Add to Cart +</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
