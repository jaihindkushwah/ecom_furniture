import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import WishItemList from 'components/WishItemList';
import FavouriteList from 'components/FavouriteList';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function WishScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Wish List</Text>
        <WishItemList />
        <View style={{paddingVertical: 10, rowGap: 10}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 16,
              fontWeight: 'bold',
              padding: 10,
            }}>
            Sofa you might also like
          </Text>
          <FavouriteList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'sans',
    color: 'grey',
  },
});
