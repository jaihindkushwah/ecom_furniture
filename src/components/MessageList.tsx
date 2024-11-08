import {View, Text, FlatList, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import MessageItem from './MessageItem';

interface MessageItemProps {
  id: string;
  sender: string;
  lastMessage: string;
  icon: string;
  time: string;
}

const dummyData: MessageItemProps[] = [
  {
    id: '1',
    sender: 'Alice',
    lastMessage: 'Hey! Are you free to chat?',
    icon: 'https://www.loomandneedles.com/images/product/169/ReactiveDualComfortOrthopaedicMediumFirmMattressRedesign1.jpg',
    time: '09:00 AM',
  },
  {
    id: '2',
    sender: 'Bob',
    lastMessage: 'Just checking in. How’s everything?',
    icon: 'https://www.sundays-company.com/cdn/shop/files/DIN-BC-008-050-0_CL1_Hero.jpg?v=1726593744&width=1900',
    time: '09:15 AM',
  },
  {
    id: '3',
    sender: 'Cathy',
    lastMessage: 'Can you send me the document?',
    icon: 'https://www.worldfurnitureonline.com/wp-content/uploads/2023/01/World-Furniture-Online_124.jpg',
    time: '09:30 AM',
  },
  {
    id: '4',
    sender: 'David',
    lastMessage: 'Do you have time for a quick call?',
    icon: 'https://www.loomandneedles.com/images/product/169/ReactiveDualComfortOrthopaedicMediumFirmMattressRedesign1.jpg',
    time: '09:45 AM',
  },
  {
    id: '5',
    sender: 'Eva',
    lastMessage: 'Let’s catch up soon!',
    icon: 'https://www.sundays-company.com/cdn/shop/files/DIN-BC-008-050-0_CL1_Hero.jpg?v=1726593744&width=1900',
    time: '10:00 AM',
  },
  {
    id: '6',
    sender: 'Frank',
    lastMessage: 'Are you coming to the meeting?',
    icon: 'https://www.worldfurnitureonline.com/wp-content/uploads/2023/01/World-Furniture-Online_124.jpg',
    time: '10:15 AM',
  },
  {
    id: '7',
    sender: 'Grace',
    lastMessage: 'Lunch later?',
    icon: 'https://www.loomandneedles.com/images/product/169/ReactiveDualComfortOrthopaedicMediumFirmMattressRedesign1.jpg',
    time: '10:30 AM',
  },
  {
    id: '8',
    sender: 'Harry',
    lastMessage: 'Got the latest update?',
    icon: 'https://www.sundays-company.com/cdn/shop/files/DIN-BC-008-050-0_CL1_Hero.jpg?v=1726593744&width=1900',
    time: '11:00 AM',
  },
  {
    id: '9',
    sender: 'Ivy',
    lastMessage: 'Need help with that report?',
    icon: 'https://www.worldfurnitureonline.com/wp-content/uploads/2023/01/World-Furniture-Online_124.jpg',
    time: '11:30 AM',
  },
  {
    id: '10',
    sender: 'Jack',
    lastMessage: 'Got your message. Let’s talk soon!',
    icon: 'https://www.loomandneedles.com/images/product/169/ReactiveDualComfortOrthopaedicMediumFirmMattressRedesign1.jpg',
    time: '12:00 PM',
  },
  {
    id: '11',
    sender: 'Karen',
    lastMessage: 'Meeting rescheduled to 2 PM.',
    icon: 'https://www.sundays-company.com/cdn/shop/files/DIN-BC-008-050-0_CL1_Hero.jpg?v=1726593744&width=1900',
    time: '12:30 PM',
  },
  {
    id: '12',
    sender: 'Leo',
    lastMessage: 'Catch you later!',
    icon: 'https://www.worldfurnitureonline.com/wp-content/uploads/2023/01/World-Furniture-Online_124.jpg',
    time: '01:00 PM',
  },
  {
    id: '13',
    sender: 'Mia',
    lastMessage: 'Are you free this evening?',
    icon: 'https://www.loomandneedles.com/images/product/169/ReactiveDualComfortOrthopaedicMediumFirmMattressRedesign1.jpg',
    time: '01:30 PM',
  },
  {
    id: '14',
    sender: 'Nick',
    lastMessage: 'Thanks for the update!',
    icon: 'https://www.sundays-company.com/cdn/shop/files/DIN-BC-008-050-0_CL1_Hero.jpg?v=1726593744&width=1900',
    time: '02:00 PM',
  },
  {
    id: '15',
    sender: 'Olivia',
    lastMessage: 'See you tomorrow!',
    icon: 'https://www.worldfurnitureonline.com/wp-content/uploads/2023/01/World-Furniture-Online_124.jpg',
    time: '02:30 PM',
  },
];

interface MessageListProps {}
export default function MessageList({}: MessageListProps) {
  const [data, setData] = useState(dummyData);
  const [refreshing, setRefreshing] = useState(false);
  const refreshHandler = () => {
    setData([]);
    setRefreshing(true);
    setTimeout(() => {
      setData(dummyData);
      setRefreshing(false);
    }, 2000);
  };
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />
      }
      ListHeaderComponent={() => <View style={{height: 15}} />}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <MessageItem
          {...item}
          icon={`https://randomuser.me/api/portraits/${
            index % 2 == 0 ? 'women' : 'men'
          }/${item.id}.jpg`}
        />
      )}
      style={{flex: 1}}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
      ListFooterComponent={() => (
        <View style={{height: 30, marginBottom: 40}}>
          <Text style={{textAlign: 'center', padding: 5, color: 'orange'}}>
            No more messages
          </Text>
        </View>
      )}
    />
  );
}
