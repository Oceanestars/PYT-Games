import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="connection"
        options={{
          title: "Connection",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "game-controller" : "game-controller-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wordle"
        options={{
          title: "Wordle",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "book-sharp" : "book-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="crossword"
        options={{
          title: "Crossword",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "square-outline" : "square-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
