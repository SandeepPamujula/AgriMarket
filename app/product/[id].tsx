import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ArrowLeft,
  MessageSquare,
  Star,
  Clock,
  MapPin,
  ShoppingCart,
} from "lucide-react-native";
import BottomNavigation from "../components/BottomNavigation";

const ProductDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: id || "1",
    name: "Organic Tomatoes",
    price: 2.99,
    description:
      "Fresh organic tomatoes grown without pesticides. Perfect for salads and cooking.",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80",
    available: true,
    freshness: 4,
    sellerRating: 4.5,
    seller: {
      name: "Green Valley Farm",
      location: "Riverside County, 15 miles away",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=GreenValley",
    },
    quantity: "Available in 1kg, 2kg, and 5kg packages",
    delivery: "Available for delivery within 24 hours",
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white pt-12 pb-2 px-4 flex-row items-center justify-between border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">Product Details</Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView className="flex-1">
        {/* Product Image */}
        <Image
          source={{ uri: product.image }}
          className="w-full h-64 bg-gray-200"
          contentFit="cover"
        />

        {/* Product Info */}
        <View className="p-4">
          <View className="flex-row justify-between items-start">
            <View className="flex-1">
              <Text className="text-2xl font-bold text-gray-800">
                {product.name}
              </Text>
              <Text className="text-green-600 font-bold text-xl mt-1">
                ${product.price.toFixed(2)}/kg
              </Text>
            </View>
            <View
              className={`px-3 py-1 rounded-full ${product.available ? "bg-green-100" : "bg-red-100"}`}
            >
              <Text
                className={`text-sm font-medium ${product.available ? "text-green-800" : "text-red-800"}`}
              >
                {product.available ? "In Stock" : "Out of Stock"}
              </Text>
            </View>
          </View>

          {/* Freshness and Rating */}
          <View className="flex-row mt-4 space-x-4">
            <View className="flex-row items-center">
              <Clock size={16} color="#6B7280" />
              <Text className="text-gray-600 text-sm ml-1">Freshness:</Text>
              <View className="flex-row ml-1">
                {[...Array(5)].map((_, i) => (
                  <View
                    key={i}
                    className={`w-2 h-2 rounded-full mx-[1px] ${i < product.freshness ? "bg-green-500" : "bg-gray-300"}`}
                  />
                ))}
              </View>
            </View>

            <View className="flex-row items-center">
              <Star size={16} color="#F59E0B" />
              <Text className="text-gray-600 text-sm ml-1">
                {product.sellerRating.toFixed(1)} Rating
              </Text>
            </View>
          </View>

          {/* Description */}
          <View className="mt-4">
            <Text className="text-base font-semibold text-gray-800">
              Description
            </Text>
            <Text className="text-gray-600 mt-1 leading-5">
              {product.description}
            </Text>
          </View>

          {/* Quantity */}
          <View className="mt-4">
            <Text className="text-base font-semibold text-gray-800">
              Quantity
            </Text>
            <Text className="text-gray-600 mt-1">{product.quantity}</Text>
          </View>

          {/* Delivery */}
          <View className="mt-4">
            <Text className="text-base font-semibold text-gray-800">
              Delivery
            </Text>
            <Text className="text-gray-600 mt-1">{product.delivery}</Text>
          </View>

          {/* Seller Info */}
          <View className="mt-6 bg-gray-50 p-4 rounded-lg">
            <View className="flex-row items-center">
              <Image
                source={{ uri: product.seller.image }}
                className="w-12 h-12 rounded-full bg-gray-200"
              />
              <View className="ml-3">
                <Text className="font-bold text-gray-800">
                  {product.seller.name}
                </Text>
                <View className="flex-row items-center mt-1">
                  <MapPin size={12} color="#6B7280" />
                  <Text className="text-gray-500 text-xs ml-1">
                    {product.seller.location}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              className="mt-4 bg-white border border-green-500 rounded-lg py-2 items-center"
              activeOpacity={0.7}
            >
              <View className="flex-row items-center">
                <MessageSquare size={16} color="#22c55e" />
                <Text className="ml-2 text-green-600 font-medium">
                  Contact Seller
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action */}
      <View className="p-4 border-t border-gray-200 bg-white">
        <TouchableOpacity
          className="bg-green-500 py-3 rounded-lg items-center"
          activeOpacity={0.7}
        >
          <View className="flex-row items-center">
            <ShoppingCart size={20} color="white" />
            <Text className="ml-2 text-white font-bold">Add to Cart</Text>
          </View>
        </TouchableOpacity>
      </View>

      <BottomNavigation />
    </View>
  );
};

export default ProductDetail;
