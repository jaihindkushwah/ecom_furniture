import {
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MessageList from 'components/MessageList';
import Avatar from 'components/ui/Avatar';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

// statusbar height

export default function Messages() {
  // const statusBarHeight = StatusBar.currentHeight;
  const height = Dimensions.get('screen').height;
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <SafeAreaView style={{rowGap: 5, backgroundColor: '#1B202D'}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1B202D"
        translucent
      />
      <View
        style={{
          paddingHorizontal: 15,
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 5,
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 700,
            textAlign: 'left',
            color: 'white',
            fontFamily: 'Poppins',
          }}>
          Messages
        </Text>

        <MaterialIcons name="search" color="white" size={30} />
      </View>
      <View style={{paddingHorizontal: 15, marginVertical: 0}}>
        <Text style={{color: 'grey', fontWeight: 600, letterSpacing: 2}}>
          RECENT
        </Text>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 3,
            borderWidth: 1,
            borderColor: 'grey',
            marginRight: 10,
            borderRadius: 8,
          }}>
          <MaterialIcons name="search" color="grey" size={25} />
          <TextInput
            placeholder="Search messages..."
            placeholderTextColor={'white'}
            style={{flex: 1}}
          />
        </View> */}
      </View>
      <View style={{paddingLeft: 15}}>
        <FlatList
          horizontal
          data={new Array(10).fill(0)}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat', {index})}
              style={{rowGap: 10, alignItems: 'center', marginTop: 5}}>
              <Avatar
                uri={`https://randomuser.me/api/portraits/${
                  index % 2 == 0 ? 'women' : 'men'
                }/${index + 15}.jpg`}
                style={{width: 60, height: 60}}
                title="Jaihind Kushwaha"
              />
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: 16,
                }}>
                {index % 2 == 0 ? 'Alice' : 'Bob'}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          marginBottom: 10,
          paddingTop: 10,
          paddingBottom: 30,
          backgroundColor: '#292F3F',
          marginTop: 10,
          borderRadius: 50,
          height: height * 0.7,
        }}>
        <MessageList />
      </View>
    </SafeAreaView>
  );
}
