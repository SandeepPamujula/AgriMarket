import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Star, Clock } from "lucide-react-native";
import { useRouter } from "expo-router";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  available: boolean;
  freshness: number; // 1-5 rating
  sellerRating: number; // 1-5 rating
}

const ProductCard = ({
  id = "1",
  name = "Organic Tomatoes",
  price = 2.99,
  image = "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&q=80",
  available = true,
  freshness = 4,
  sellerRating = 4.5,
}: ProductCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/product/${id}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="bg-white rounded-lg overflow-hidden shadow-md m-2 w-[170px] h-[220px]"
      activeOpacity={0.7}
    >
      <View className="relative">
        <Image
          source={{ uri: image }}
          className="w-full h-24 bg-gray-200"
          contentFit="cover"
        />
        {!available && (
          <View className="absolute top-0 right-0 bg-red-500 px-2 py-1 rounded-bl-lg">
            <Text className="text-white text-xs font-bold">Sold Out</Text>
          </View>
        )}
      </View>

      <View className="p-2">
        <Text
          className="font-bold text-sm mb-1 text-gray-800"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text className="text-green-600 font-bold text-base mb-1">
          ${price.toFixed(2)}/kg
        </Text>

        <View className="flex-row items-center mt-1">
          <Clock size={12} color="#6B7280" />
          <Text className="text-gray-500 text-xs ml-1">Freshness:</Text>
          <View className="flex-row ml-1">
            {[...Array(5)].map((_, i) => (
              <View
                key={i}
                className={`w-2 h-2 rounded-full mx-[1px] ${i < freshness ? "bg-green-500" : "bg-gray-300"}`}
              />
            ))}
          </View>
        </View>

        <View className="flex-row items-center mt-1">
          <Star size={12} color="#F59E0B" />
          <Text className="text-gray-500 text-xs ml-1">Seller:</Text>
          <Text className="text-gray-700 text-xs ml-1">
            {sellerRating.toFixed(1)}
          </Text>
        </View>

        <View className="mt-2">
          <Text
            className={`text-xs font-medium px-2 py-1 rounded-full text-center ${available ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-500"}`}
          >
            {available ? "Available" : "Out of Stock"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
