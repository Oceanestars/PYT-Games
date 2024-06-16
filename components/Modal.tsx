import Ionicons from "@expo/vector-icons/Ionicons";

import React, { Dispatch, SetStateAction } from "react";
import { Alert, Modal, Text, View } from "react-native";
import { modalStyle } from "../app/styles/connectionStyle";

const ModalConnection = (props: {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  answer: string;
}) => {
  const { modalVisible, setModalVisible, answer } = props;
  return (
    <View style={modalStyle.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyle.centeredView}>
          <View style={modalStyle.modalView}>
            <Ionicons
              name="close-circle-outline"
              size={24}
              color="black"
              onPress={() => setModalVisible(!modalVisible)} // Add onPress handler to close modal
              style={modalStyle.closeIcon}
            />
            <Text style={modalStyle.modalText}>Great Job at guessing 🔥 </Text>
            <Text style={modalStyle.modalAnswerText}>{answer}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalConnection;
