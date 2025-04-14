import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Home, Search, MessageSquare, User } from "lucide-react-native";

interface BottomNavigationProps {
  activeTab?: string;
}

const BottomNavigation = ({ activeTab = "home" }: BottomNavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // Determine active tab based on current path if not explicitly provided
  const currentTab =
    activeTab ||
    (pathname === "/"
      ? "home"
      : pathname.includes("/search")
        ? "search"
        : pathname.includes("/messages")
          ? "messages"
          : pathname.includes("/profile")
            ? "profile"
            : "home");

  const navigateTo = (route: string) => {
    switch (route) {
      case "home":
        router.push("/");
        break;
      case "search":
        router.push("/search");
        break;
      case "messages":
        router.push("/messages");
        break;
      case "profile":
        router.push("/profile");
        break;
      default:
        router.push("/");
    }
  };

  const getIconColor = (tab: string) => {
    return currentTab === tab ? "#22c55e" : "#6b7280";
  };

  return (
    <View className="flex-row justify-around items-center h-[70px] bg-white border-t border-gray-200 px-2">
      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => navigateTo("home")}
      >
        <Home size={24} color={getIconColor("home")} />
        <Text
          className={`text-xs mt-1 ${currentTab === "home" ? "text-green-500 font-semibold" : "text-gray-500"}`}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => navigateTo("search")}
      >
        <Search size={24} color={getIconColor("search")} />
        <Text
          className={`text-xs mt-1 ${currentTab === "search" ? "text-green-500 font-semibold" : "text-gray-500"}`}
        >
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => navigateTo("messages")}
      >
        <MessageSquare size={24} color={getIconColor("messages")} />
        <Text
          className={`text-xs mt-1 ${currentTab === "messages" ? "text-green-500 font-semibold" : "text-gray-500"}`}
        >
          Messages
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 items-center justify-center"
        onPress={() => navigateTo("profile")}
      >
        <User size={24} color={getIconColor("profile")} />
        <Text
          className={`text-xs mt-1 ${currentTab === "profile" ? "text-green-500 font-semibold" : "text-gray-500"}`}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;
