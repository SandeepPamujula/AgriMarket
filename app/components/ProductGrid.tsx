import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  available: boolean;
  freshness: number;
  sellerRating: number;
}

interface ProductGridProps {
  products?: Product[];
  title?: string;
  showHeader?: boolean;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      name: "Organic Tomatoes",
      price: 2.99,
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&q=80",
      available: true,
      freshness: 4,
      sellerRating: 4.5,
    },
    {
      id: "2",
      name: "Fresh Carrots",
      price: 1.99,
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&q=80",
      available: true,
      freshness: 5,
      sellerRating: 4.2,
    },
    {
      id: "3",
      name: "Green Apples",
      price: 3.49,
      image:
        "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=300&q=80",
      available: true,
      freshness: 4,
      sellerRating: 4.8,
    },
    {
      id: "4",
      name: "Organic Potatoes",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&q=80",
      available: false,
      freshness: 3,
      sellerRating: 4.0,
    },
    {
      id: "5",
      name: "Fresh Strawberries",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&q=80",
      available: true,
      freshness: 5,
      sellerRating: 4.7,
    },
    {
      id: "6",
      name: "Organic Lettuce",
      price: 2.49,
      image:
        "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&q=80",
      available: true,
      freshness: 4,
      sellerRating: 4.3,
    },
  ],
  title = "Featured Products",
  showHeader = true,
}: ProductGridProps) => {
  return (
    <View className="bg-gray-50 flex-1">
      {showHeader && (
        <View className="px-4 py-3 bg-white border-b border-gray-200">
          <Text className="text-xl font-bold text-gray-800">{title}</Text>
        </View>
      )}

      <ScrollView className="flex-1">
        <View className="flex-row flex-wrap justify-center py-2">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductGrid;
