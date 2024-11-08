import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface CardProps {
  title?: string;
  isFavourite?: boolean;
  uri: string;
  id: string;
}

function FavouriteCard({title, isFavourite, uri, id}: CardProps) {
  const [isActive, setIsActive] = useState(isFavourite ?? false);
  const navigation = useNavigation<any>();
  // const [lastTap, setLastTap] = useState<number | null>(null);
  // const DOUBLE_TAP_DELAY = 300; // 300 ms is a standard double-tap time threshold

  // const handleDoubleTap = useCallback(() => {
  //   const now = Date.now();
  //   if (lastTap && now - lastTap < DOUBLE_TAP_DELAY) {
  //     setIsActive(!isActive);
  //   } else {
  //     setLastTap(now);
  //   }
  // }, [lastTap, isActive]);
  const handleTapOnCard = useCallback(() => {
    navigation.navigate('Product' as never, {id: id});
  }, [id]);
  return (
    <Pressable onPress={handleTapOnCard} style={{position: 'relative'}}>
      <Image
        source={{
          uri: uri,
        }}
        style={{minWidth: '100%', height: 180, borderRadius: 10}}
        resizeMode="cover"
      />

      <View
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          padding: 5,
          borderRadius: 50,
          backgroundColor: 'white',
        }}>
        {!isActive ? (
          <FontAwesome5Icon
            onPress={() => setIsActive(!isActive)}
            name="heart"
            size={18}
            color="black"
          />
        ) : (
          <MaterialIcon
            onPress={() => setIsActive(!isActive)}
            name="favorite"
            size={18}
            color="red"
          />
        )}
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 2,
          left: 0,
          right: 0,
        }}>
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 16,
          }}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

export default FavouriteCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 160,
    height: 180,
    backgroundColor: 'blue',
    margin: 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
  content: {
    fontSize: 16,
  },
});
