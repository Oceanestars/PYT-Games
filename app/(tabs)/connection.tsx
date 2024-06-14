import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Pressable, Text } from "react-native";
import React, { useState } from "react";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
// import { wordList, categories } from "../../constants/Connection";
// import { randomize } from "../../scripts/utils";
function Button(props: {
  onPress: any;
  title?: "Save" | string;
  styleClass: any;
}) {
  const { onPress, title = "Save", styleClass } = props;
  return (
    <Pressable style={styleClass} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
function randomize(values: string[]) {
  let index = values.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (index != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;

    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }
  return values;
}
export default function Connection() {
  const wordList = [
    "pample mousse",
    "princess",
    "waffle",
    "cereal",
    "pickle",
    "men",
    "pretzel",
    "vinegar",
    "pasteque",
    "lemon",
    "tangerine",
    "guava",
    "pasta",
    "sushi",
    "falafel",
    "pavlova",
  ];
  // randomize(wordList);

  const [pressedButtons, setPressedButtons] = useState({});

  // Function to handle button presses
  // Function to handle button presses
  const handleButtonPress = (label, index) => {
    setPressedButtons((prevState) => {
      // Create a new copy of the previous state
      const updatedState = { ...prevState };
      if (!updatedState["selected"]) {
        updatedState["selected"] = false; // Or initialize with whatever default value you need
      }
      // Toggle the pressed state for the specific button index
      updatedState["selected"] = !prevState["selected"];
      console.log(updatedState);
      return updatedState;
    });
    console.log(`${label} pressed`);
  };

  return (
    <ParallaxScrollView
      style={styles.container}
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons
          size={310}
          name="game-controller-outline"
          style={styles.headerImage}
        />
      }
    >
      <ThemedText type="title">Connection</ThemedText>

      <ThemedView style={styles.grid}>
        {wordList.map((label, index) => (
          <Button
            key={index}
            onPress={() => handleButtonPress(label)}
            title={label}
            styleClass={[
              styles.gridButton,
              pressedButtons["selected"] && styles.gridButtonPressed,
            ]}
          ></Button>
        ))}
      </ThemedView>
      <Button
        title={"Submit"}
        styleClass={styles.submitButton}
        onPress={() => handleButtonPress("Check Answer")}
      ></Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
  },
  gridButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
    paddingHorizontal: 5,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#ec8f7f",
    width: "22%",
    height: 60,
    margin: 4,
    marginBottom: 15,
  },
  gridButtonPressed: {
    backgroundColor: "#ff7f7f",
  },
  submitButton: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
    paddingHorizontal: 7,
    borderRadius: 5,
    elevation: 3,
    width: "50%",
    height: 40,
    margin: "auto",
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  container: {
    flexGrow: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
    backgroundColor: "#f5f5f5",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
