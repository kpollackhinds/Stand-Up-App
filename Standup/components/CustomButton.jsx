import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Colors } from "../constants/colors.jsx";

const SignInButton = ({
  text = "Click me",
  mode = "contained",
  buttonColor = Colors.light.background,
  textColor = Colors.light.primary,
  onPress = () => {},
  labelStyle = {},
  style = {},
  ...props
}) => {
  return (
    <View style={style}>
      <Button
        mode={mode}
        buttonColor={buttonColor}
        textColor={textColor}
        onPress={onPress}
        labelStyle={[
          {
            fontSize: 16, // default font size
            fontFamily: "Montserrat-Bold", // default font family
            fontWeight: "bold", // default font weight
          },
          labelStyle,
        ]} // allows custom styles to be merged
        {...props} // pass down any other props
      >
        {text}
      </Button>
    </View>
  );
};

export default SignInButton;
