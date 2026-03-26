import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarShowLabel: false, 
        headerShown: false,
        tabBarStyle: { height: 60, borderTopWidth: 1, borderColor: '#eee' },
      }}>
      
      
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="menu-outline" size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="dashboard" 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="grid-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}