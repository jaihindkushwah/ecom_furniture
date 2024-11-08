import {View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SeeAll() {
  const navigation = useNavigation<NavigationProp<any>>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialIcons
          name="search"
          style={{marginRight: 10}}
          size={24}
          color="black"
        />
      ),
      //   headerLeft: () => (
      //     <MaterialIcons
      //       name="menu"
      //       size={24}
      //       style={{marginLeft: 10}}
      //       color="black"
      //     />
      //   ),
      headerTitle: 'All products',
    });
  });
  return (
    <View>
      <Text>SeeAll</Text>
    </View>
  );
}
