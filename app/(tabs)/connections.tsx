import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, Alert, Modal } from "react-native";
import React, { useState, useMemo } from "react";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ModalConnection from "@/components/Modal";
import { answer } from "../../constants/Connection";
import { findMatchingArray, randomize } from "../utils/utils";
import { styles } from "../styles/connectionStyle";

function Button(props: {
  onPress: any;
  title?: "Submit" | string;
  styleClass: any;
  isDisabled?: boolean;
}) {
  const { onPress, title = "Submit", styleClass, isDisabled } = props;
  return (
    <Pressable style={styleClass} onPress={onPress} disabled={isDisabled}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default function Connection() {
  const [pressedButtons, setPressedButtons] = useState<Record<string, Boolean>>(
    {}
  );
  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  // useMemo so that it only runs once when the component mounts. This prevents re-renders from recalculating the combined and shuffled array.
  const combinedOptionsArray = useMemo(() => {
    return randomize(Object.values(answer).flat());
  }, []);

  const handleButtonPress = (label: string) => {
    setPressedButtons((prevState) => {
      const updatedState = { ...prevState };
      // Toggle the pressed state for the specific button label
      updatedState[label] = !prevState[label];
      return updatedState;
    });
  };

  const submitButtonPress = (wordSelected: Record<string, Boolean>) => {
    const currentAnswer = Object.keys(wordSelected).filter(
      (key) => wordSelected[key] === true
    );
    if (currentAnswer.length == 4) {
      const correctCategory = findMatchingArray(answer, currentAnswer);
      console.log("Selected: ", currentAnswer);
      if (correctCategory == null) {
        console.warn("Damn do you even know Pat?");
        setCorrectAnswer(null);
      } else {
        console.log("Correct Answer for:", correctCategory);
        setCorrectAnswer(correctCategory);
        setModalVisible(true);
        setPressedButtons({});
        setDisabledButtons((prevDisabled) => [
          ...prevDisabled,
          ...currentAnswer,
        ]);
      }
    } else {
      console.warn("Did not select 4 options");
      return;
    }
    return;
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
      <ThemedText type="title">Connections</ThemedText>
      <ThemedView style={styles.grid}>
        {combinedOptionsArray.map((label, index) => (
          <Button
            key={index}
            onPress={() => handleButtonPress(label)}
            title={label}
            styleClass={[
              styles.gridButton,
              pressedButtons[label] && styles.gridButtonPressed,
              disabledButtons.includes(label) && styles.gridButtonDisabled,
            ]}
            isDisabled={disabledButtons.includes(label)}
          />
        ))}
        {true ? (
          <ModalConnection
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            answer={correctAnswer}
          />
        ) : (
          <></>
        )}
      </ThemedView>
      <Button
        title={"Submit"}
        styleClass={styles.submitButton}
        onPress={() => submitButtonPress(pressedButtons)}
      />
    </ParallaxScrollView>
  );
}
