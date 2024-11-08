import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {FlatList, Pressable} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Avatar from 'components/ui/Avatar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {mutualChatData} from 'utils/messageData';
import {CameraOptions, launchCamera} from 'react-native-image-picker';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
interface Message {
  id: number;
  text: string;
  date: string;
  senderId: number;
  senderName: string;
}

export default function Chat() {
  const route = useRoute();
  const {id} = route.params as {id: number};
  const handleCamera = async () => {
    // check(PERMISSIONS.ANDROID.CAMERA).then(result => {
    //   switch (result) {
    //     case 'granted':
    //       console.log('Permission Granted');
    //       break;
    //     case 'denied':
    //       console.log('Permission Denied');
    //       break;
    //     case 'unavailable':
    //       console.log('Permission unavailable');
    //       break;
    //     case 'blocked':
    //       console.log('Permission blocked');
    //       break;
    //     case 'limited':
    //       console.log('Permission limited');
    //       break;
    //   }
    // });
    const cameraPermission = await request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA,
    );

    const options: CameraOptions = {
      mediaType: 'mixed',
      quality: 1,
      includeBase64: true,
      // saveToPhotos: true,
    };
    if (cameraPermission === RESULTS.GRANTED) {
      const result = await launchCamera(options, res => {
        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.assets) {
          console.log('Selected image URI:', res.assets[0].uri);
          console.log('Selected image Base64:', res.assets[0].base64);
        } else {
          console.log('ImagePicker Error: ', res.errorMessage);
        }
      });
      // await handleResponse(result);
      console.log('camera started');
    } else {
      console.log('Permission Denied');
    }
  };
  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.assets) {
      const source = response.assets[0].uri;
      console.log('Selected image URI:', source);
      // You can set this source to your state to display the image or perform other actions
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1B202D'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#202636"
          translucent
        />
        <View style={styles.chatHeaderContainer}>
          <Avatar
            title="Chat"
            uri="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <Text
            style={{color: 'white', flex: 1, fontWeight: 600, fontSize: 18}}>
            Jaihind Kushwaha
          </Text>
          <View style={{flexDirection: 'row', columnGap: 15}}>
            <TouchableOpacity>
              <MaterialIcons name="videocam" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="call" size={24} color="white" />
            </TouchableOpacity>
            <Pressable>
              <MaterialIcons name="more-vert" size={24} color="white" />
            </Pressable>
          </View>
        </View>
        <FlatList
          data={mutualChatData}
          keyExtractor={item => item._id}
          contentContainerStyle={{paddingBottom: 65, marginTop: 5}}
          ItemSeparatorComponent={() => <View style={{height: 15}} />}
          renderItem={({item, index}) => (
            <>
              {index == 0 ? (
                <View style={{marginBottom: 10, alignItems: 'center'}}>
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    {item.timestamp.getDate()}/{item.timestamp.getMonth() + 1}/
                    {item.timestamp.getFullYear()}
                  </Text>
                </View>
              ) : null}
              {index != 0 &&
              mutualChatData[index - 1].timestamp.getUTCDate() !=
                item.timestamp.getUTCDate() ? (
                <View style={{marginBottom: 10, alignItems: 'center'}}>
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    {item.timestamp.getDate()}/{item.timestamp.getMonth() + 1}/
                    {item.timestamp.getFullYear()}
                  </Text>
                </View>
              ) : null}
              {item.senderName === 'Bob' ? (
                <View
                  style={{
                    alignItems: 'flex-start',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={[
                      styles.singleChatText,
                      styles.singleChatSenderText,
                    ]}>
                    {item.message}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'flex-end',
                    marginRight: 10,
                  }}>
                  <Text
                    style={[
                      styles.singleChatText,
                      styles.singleChatReceiverText,
                    ]}>
                    {item.message}
                  </Text>
                </View>
              )}
            </>
          )}
        />
        <View style={styles.chatInputContainer}>
          <TouchableOpacity onPress={handleCamera}>
            <MaterialIcons name="photo-camera" size={24} color="#9398A7" />
          </TouchableOpacity>
          <TextInput
            placeholder="Type a message"
            style={{color: '#FFFFFF', fontSize: 16, flex: 1}}
            placeholderTextColor={'grey'}
          />
          <TouchableOpacity>
            <MaterialIcons name="send" size={24} color="#9398A7" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 15,
    backgroundColor: '#202636',
  },

  singleChatText: {
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    maxWidth: '80%',
    borderRadius: 20,
  },
  singleChatReceiverText: {
    backgroundColor: '#7A8194',
    textAlign: 'right',
  },
  singleChatSenderText: {
    backgroundColor: '#373E4E',
    textAlign: 'left',
  },
  chatInputContainer: {
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 3,
    alignItems: 'center',
    position: 'absolute',
    bottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3D4354',
    maxWidth: '100%',
    flex: 1,
    columnGap: 10,
    borderRadius: 30,
  },
});
