import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import { Search, Filter, Bell, Star } from "lucide-react-native";
import ProductGrid from "./components/ProductGrid";
import BottomNavigation from "./components/BottomNavigation";

const categories = [
  { id: "1", name: "Vegetables", icon: "🥦" },
  { id: "2", name: "Fruits", icon: "🍎" },
  { id: "3", name: "Dairy", icon: "🥛" },
  { id: "4", name: "Grains", icon: "🌾" },
  { id: "5", name: "Meat", icon: "🥩" },
];

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-4 border-b border-gray-200">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-gray-500">Location</Text>
            <Text className="text-base font-bold text-gray-800">
              San Francisco, CA
            </Text>
          </View>
          <TouchableOpacity className="p-2">
            <Bell size={24} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="flex-row mt-4 items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={20} color="#9CA3AF" />
          <TextInput
            placeholder="Search for fresh produce..."
            className="flex-1 ml-2 text-gray-800"
          />
          <TouchableOpacity className="p-1">
            <Filter size={20} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Categories */}
        <View className="py-4">
          <View className="px-4 flex-row justify-between items-center">
            <Text className="text-lg font-bold text-gray-800">Categories</Text>
            <TouchableOpacity>
              <Text className="text-green-600 font-medium">See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-3 pl-4"
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                className="mr-4 items-center"
                activeOpacity={0.7}
              >
                <View className="bg-white w-16 h-16 rounded-full items-center justify-center shadow-sm border border-gray-100">
                  <Text className="text-2xl">{category.icon}</Text>
                </View>
                <Text className="mt-2 text-gray-700 text-sm">
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Banner */}
        <View className="px-4 py-2">
          <TouchableOpacity
            className="bg-green-50 rounded-xl overflow-hidden shadow-sm"
            activeOpacity={0.9}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
              }}
              className="w-full h-32"
              contentFit="cover"
            />
            <View className="absolute top-0 left-0 right-0 bottom-0 p-4 justify-center">
              <View className="bg-white/80 p-3 rounded-lg max-w-[70%]">
                <Text className="text-green-600 font-bold text-xs">
                  SPECIAL OFFER
                </Text>
                <Text className="text-gray-800 font-bold text-lg">
                  20% Off Fresh Produce
                </Text>
                <Text className="text-gray-600 text-xs mt-1">
                  Valid until June 30, 2023
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Nearby Sellers */}
        <View className="py-4">
          <View className="px-4 flex-row justify-between items-center">
            <Text className="text-lg font-bold text-gray-800">
              Nearby Sellers
            </Text>
            <TouchableOpacity>
              <Text className="text-green-600 font-medium">See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-3 pl-4"
          >
            {[
              {
                id: "1",
                name: "Green Valley Farm",
                distance: "2.5 miles away",
                image:
                  "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=300&q=80",
                rating: 4.8,
              },
              {
                id: "2",
                name: "Sunshine Orchards",
                distance: "3.7 miles away",
                image:
                  "https://images.unsplash.com/photo-1500595046743-cd271d694e30?w=300&q=80",
                rating: 4.6,
              },
              {
                id: "3",
                name: "Fresh Meadows",
                distance: "5.2 miles away",
                image:
                  "https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?w=300&q=80",
                rating: 4.5,
              },
            ].map((seller) => (
              <TouchableOpacity
                key={seller.id}
                className="mr-4 w-48"
                activeOpacity={0.7}
              >
                <View className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <Image
                    source={{ uri: seller.image }}
                    className="w-full h-24 bg-gray-200"
                    contentFit="cover"
                  />
                  <View className="p-3">
                    <Text className="font-bold text-gray-800">
                      {seller.name}
                    </Text>
                    <View className="flex-row justify-between items-center mt-1">
                      <Text className="text-gray-500 text-xs">
                        {seller.distance}
                      </Text>
                      <View className="flex-row items-center">
                        <Star size={12} color="#F59E0B" />
                        <Text className="text-gray-700 text-xs ml-1">
                          {seller.rating}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Product Grid */}
        <ProductGrid />
      </ScrollView>

      <BottomNavigation activeTab="home" />
    </View>
  );
}

// const Star = ({ size, color }: { size: number; color: string }) => {
//   return (
//     <View style={{ width: size, height: size }}>
//       <Text style={{ color, fontSize: size - 2 }}>★</Text>
//     </View>
//   );
// };
