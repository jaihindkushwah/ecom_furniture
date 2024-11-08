import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Pressable} from 'react-native';
import Card from 'components/ui/Card';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CardCarousel from 'components/CardCarousel';
import FavouriteList from 'components/FavouriteList';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [searchInput, setSearchInput] = useState<string | undefined>();
  const handleSearch = (value: string) => {
    setSearchInput(value);
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request or some data loading here
    setTimeout(() => {
      // You can also reset any data here if necessary
      setRefreshing(false);
    }, 1000); // Delay for 1 second for demonstration
  }, []);

  const seeAllPageRoute = () => {
    navigation.navigate('SeeAll' as never);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      horizontal={false}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: 10,
          paddingLeft: 10,
          backgroundColor: 'white',
          rowGap: 20,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              padding: 15,
              flexDirection: 'column',
              display: 'flex',
              rowGap: 7,
            }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'left',
                fontWeight: 'bold',
                lineHeight: 30,
              }}>
              Explore What
            </Text>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'left',
                fontWeight: 'bold',
                lineHeight: 30,
              }}>
              Your Home Needs
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginBottom: 10,
              marginRight: 10,
            }}>
            <MaterialIcon name="notifications" color="#f2d21d" size={32} />
          </View>
        </View>
        <View
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
          <MaterialIcon name="search" size={20} />
          <TextInput
            placeholder="Chair, lamp, desk etc."
            style={{flex: 1}}
            value={searchInput}
            onChangeText={handleSearch}
          />
        </View>
        <View style={{rowGap: 15, width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Categories</Text>
            <Pressable
              onPress={seeAllPageRoute}
              style={{marginRight: 10, flexDirection: 'row'}}>
              <Text>See all</Text>
              <MaterialIcon name="arrow-right-alt" size={20} />
            </Pressable>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{
              flexDirection: 'row',
              padding: 3,
              width: '100%',
              columnGap: 10,
            }}>
            <Card title="Chair" />
            <Card title="Sofa" />
            <Card title="Table" />
            <Card title="Desk" />
          </ScrollView>
          <View
            style={{
              backgroundColor: 'slate',
              paddingRight: 10,
            }}>
            <CardCarousel />
          </View>
        </View>
        <View style={{width: '100%', rowGap: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Popular</Text>
            <Pressable
              onPress={seeAllPageRoute}
              style={{marginRight: 10, flexDirection: 'row'}}>
              <Text>See all</Text>
              <MaterialIcon name="arrow-right-alt" size={20} />
            </Pressable>
          </View>
          <FavouriteList />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
