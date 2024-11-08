import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Avatar from './ui/Avatar';
import {NavigationProp, useNavigation} from '@react-navigation/native';
interface MessageItemProps {
  id: string;
  sender: string;
  lastMessage: string;
  icon: string;
  time: string;
}
const MessageItem: React.FC<MessageItemProps> = ({
  sender,
  lastMessage,
  icon,
  time,
  id,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Chat', {id})}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        columnGap: 10,
      }}>
      <Avatar title={sender} uri={icon} />
      <View style={{flex: 1, alignItems: 'flex-start', marginHorizontal: 10}}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
            color: 'white',
            fontFamily: 'Poppins',
          }}>
          {sender}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{fontSize: 13, color: '#B3B9C9', fontFamily: 'Poppins'}}>
          {lastMessage}
        </Text>
      </View>
      <Text style={{fontSize: 14, color: '#B3B9C9', fontFamily: 'Poppins'}}>
        {time}
      </Text>
    </TouchableOpacity>
  );
};
export default MessageItem;
