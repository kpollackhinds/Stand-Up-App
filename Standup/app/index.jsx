import { StatusBar } from "expo-status-bar";
import { Text, Button } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants/colors";
import { TempLogo } from "../constants/icons";
import SignInButton from "../components/CustomButton";

export default function App() {
  const { colors } = useTheme();

  return (
    <LinearGradient
      colors={["#7CB4F5", "#60A1EE", "#438FE8", "#096ADB"]}
      locations={[0, 0.35, 0.7, 1]} // Defining gradient stop positions
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center px-4">
            {/* Styled with React Native Paper for font and color */}
            <Text
              style={{
                fontFamily: "Montserrat-ExtraBold",
                fontSize: 64,
                opacity: 0.5,
                color: colors.onPrimary, // Using theme color
                marginTop: 40,
              }}
            >
              STAND-UP
            </Text>

            <View
              className="w-full justify-center items-center"
              style={{ height: 500 }}
            >
              <Text>
                "Start standing with Standup! (More stuff will be in this
                preallocated space) "
              </Text>
            </View>

            {/* Using utility classes for spacing */}
            {/* <View className="mt-10 mb-10">
              <TempLogo />
            </View> */}

            {/* Text block
            <View>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBoldItalic",
                  fontSize: 36,
                  color: "#fff", // You can replace with theme color if necessary
                  textAlign: "center",
                }}
              >
                Stand more with{" "}
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBoldItalic",
                    textAlign: "center",
                  }}
                >
                  Stand-Up!
                </Text>
              </Text>
            </View> */}

            {/* Button styled with React Native Paper */}
            <View className="mt-4">
              <SignInButton text="Get started with email!"></SignInButton>
            </View>

            {/* Status Bar */}
            <StatusBar style="auto" />

            {/* Navigation link */}
            <View className="mt-4">
              <Link href="/home" style={{ color: Colors.light.background }}>
                Skip for now
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
