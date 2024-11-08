import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import FavouriteList from './FavouriteList';
import WishItem from './WishItem';

const data = [
  {
    id: 1,
    name: 'Wish Item 1',
    price: 10,
    image: 'https://damroimages.blob.core.windows.net/damroimages/10868-1.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Wish Item 2',
    price: 100,
    image: 'https://damroimages.blob.core.windows.net/damroimages/10868-1.jpg',
    quantity: 15,
  },
  {
    id: 3,
    name: 'Wish Item 3',
    price: 130,
    image: 'https://damroimages.blob.core.windows.net/damroimages/10868-1.jpg',
    quantity: 10,
  },
];

export default function WishItemList() {
  return (
    <View style={styles.itemContainer}>
      {data.map(item => (
        <WishItem key={item.id} {...item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
});
