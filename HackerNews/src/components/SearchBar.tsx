import React, { useContext } from "react";
import { TextInput, StyleSheet, Animated } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import Voice from "@react-native-community/voice";
import { ThemeContext } from "../contexts/Theme";

const SearchBar = ({ term, onTermChangeGetNews, scrollY }) => {
  const { Colors } = useContext(ThemeContext);
  const clamp = Animated.diffClamp(scrollY, 0, 100);
  const opacity = clamp.interpolate({
    inputRange: [0, 50, 100],
    outputRange: [1, 0.1, 0],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={{
        opacity: opacity,
        // transform: [{ scale: scale }],
        ...styles.background,
        backgroundColor: Colors.overlay(0.7),
        shadowColor: Colors.shadowColor(),
        height: 35,
      }}
    >
      <FontAwesomeIcon
        icon={faSearch}
        style={{ ...styles.icon, color: Colors.icon(0.4) }}
        size={20}
      />
      <TextInput
        style={{ ...styles.text, color: Colors.fontColor() }}
        placeholder={"                "}
        value={term}
        onChangeText={onTermChangeGetNews}
        autoCapitalize="none"
        autoCorrect={true}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  background: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 30,
    marginTop: 10,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  text: {
    fontSize: 16,
    alignSelf: "center",
    padding: 0,
    width: "80%",
  },
  icon: {
    alignSelf: "center",
    margin: 8,
  },
});

export default SearchBar;
