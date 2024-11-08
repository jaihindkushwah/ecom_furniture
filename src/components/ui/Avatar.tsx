import React, {useState} from 'react';
import {Modal, View, Pressable, Image, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type AvatarProps = {
  uri?: string;
  title: string;
  style?: any;
};

export default function Avatar({uri, title, style}: AvatarProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image source={{uri: uri}} style={[styles.avatar, style]} />
        {!uri && <Text style={styles.placeholderText}>{title}</Text>}
      </Pressable>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <MaterialIcons name="close" size={24} color="white" />
          </Pressable>
          <Image source={{uri: uri}} style={styles.modalImage} />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  placeholderText: {
    textAlign: 'center',
    width: 50,
    height: 50,
    fontSize: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 260,
    height: 260,
    borderRadius: 130,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,

    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
