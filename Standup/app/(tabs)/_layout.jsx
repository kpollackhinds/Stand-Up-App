import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import {
  HomeIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import { CheckCircle } from "../../constants/icons"; // Assuming CheckCircle is part of icons object
import { PaperProvider } from "react-native-paper";
import { LightTheme } from "../../constants/theme";
import { Colors } from "../../constants/colors";

const TabsLayout = () => {
  return (
    <PaperProvider theme={LightTheme}>
      <>
        <Tabs
          screenOptions={{
            tabBarShowLabel: true,
            tabBarActiveTintColor: Colors.light.primary, // active tab color
            tabBarInactiveTintColor: Colors.light.onSurfaceDisabled, // inactive tab color
            tabBarStyle: {
              backgroundColor: Colors.light.background, // background color for the tab bar
            },
          }}
        >
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <UserIcon
                  color={
                    focused
                      ? Colors.light.primary
                      : Colors.light.onSurfaceDisabled
                  }
                />
              ),
            }}
          />
          <Tabs.Screen
            name="home"
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <HomeIcon
                  color={
                    focused
                      ? Colors.light.primary
                      : Colors.light.onSurfaceDisabled
                  }
                />
              ),
            }}
          />
          <Tabs.Screen
            name="analytics"
            options={{
              title: "Data",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <ChartBarSquareIcon
                  color={
                    focused
                      ? Colors.light.primary
                      : Colors.light.onSurfaceDisabled
                  }
                />
              ),
            }}
          />
          <Tabs.Screen
            name="goals"
            options={{
              title: "Goals",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <CheckCircle
                  color={
                    focused
                      ? Colors.light.primary
                      : Colors.light.onSurfaceDisabled
                  }
                />
              ),
            }}
          />
        </Tabs>
      </>
    </PaperProvider>
  );
};

export default TabsLayout;
