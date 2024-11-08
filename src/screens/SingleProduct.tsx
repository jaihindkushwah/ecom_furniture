import {
  View,
  Image,
  StatusBar,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Separator from 'components/ui/Separator';
import FavouriteList from 'components/FavouriteList';

interface ICartItemProps {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
  currency: string;
}
interface IProduct extends ICartItemProps {
  description: string;
  reviews: string[];
  materials: string;
  averageReviewCount: number;
}

const product: IProduct = {
  id: 1,
  title: 'Jan Sflanaganvik sofa',
  image: 'https://damroimages.blob.core.windows.net/damroimages/10868-1.jpg',
  quantity: 1,
  price: 499.99,
  currency: 'USD',
  averageReviewCount: 4.8,
  materials: 'Leather',
  reviews: ['This product is great'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export default function SingleProduct() {
  const route = useRoute();
  const navigation = useNavigation();
  const {id} = route.params as {id: number};
  const screenHeight = Dimensions.get('window').height;

  const statusBarHeight =
    (Platform.OS === 'android' ? StatusBar.currentHeight : 0) || 0;

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{marginBottom: 45}}>
          <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />
            <View
              style={{
                position: 'relative',
              }}>
              <TouchableOpacity
                onPress={handleGoBack}
                style={{position: 'absolute', top: 25, zIndex: 2}}>
                <MaterialIcons
                  name="arrow-back"
                  size={24}
                  color="black"
                  style={{
                    marginLeft: 10,
                    backgroundColor: 'translucent',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{position: 'absolute', top: 25, right: 0, zIndex: 2}}>
                <MaterialIcons
                  name="share"
                  size={24}
                  color="black"
                  style={{
                    marginRight: 10,
                    backgroundColor: 'translucent',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: product.image,
              }}
              style={[
                styles.halfScreenImage,
                {top: -statusBarHeight, height: screenHeight * 0.4},
              ]}
            />
            <View
              style={[
                styles.contentContainer,
                {marginTop: -(statusBarHeight + 20)},
              ]}>
              <Text style={styles.title}>{product.title}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>${product.price}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 15,
                  }}>
                  <TouchableOpacity
                    // onPress={handleDecrementQuantity}
                    style={styles.cartBtn}>
                    <MaterialIcons name="remove" size={16} color="orange" />
                  </TouchableOpacity>
                  <Text>{product.quantity}</Text>
                  <TouchableOpacity
                    // onPress={handleIncrementQuantity}
                    style={styles.cartBtn}>
                    <MaterialIcons name="add" size={16} color="orange" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.reviewContainer}>
                <View></View>
                <View></View>
              </View>
              <View style={styles.infoContainer}>
                <View style={[styles.priceContainer]}>
                  <Pressable style={styles.infoTab}>
                    <Text
                      style={[styles.infoTabText, styles.infoActiveTabText]}>
                      Description
                    </Text>
                  </Pressable>
                  <Pressable style={styles.infoTab}>
                    <Text style={styles.infoTabText}>Materials</Text>
                  </Pressable>
                  <Pressable style={styles.infoTab}>
                    <Text style={styles.infoTabText}>Reviews</Text>
                  </Pressable>
                </View>
                <Text style={styles.infoActiveText}>{product.description}</Text>
              </View>
            </View>
          </View>
          <Separator style={{height: 0}} />
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 15,
              flex: 1,
              height: '100%',
            }}>
            <Text
              style={{
                marginVertical: 10,
                paddingHorizontal: 15,
                fontSize: 17,
                fontWeight: 600,
              }}>
              Similar Products
            </Text>
            <FavouriteList />
          </View>
        </SafeAreaView>
      </ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 10,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          alignItems: 'center',
          columnGap: 20,
        }}>
        <TouchableOpacity
          style={{
            padding: 8,
            borderRadius: 10,
            borderColor: '#b8b8b8',
            borderWidth: 1,
          }}>
          <FontAwesome5Icon name="heart" color={'#3b3b3b'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'black',
            paddingVertical: 8,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 17,
              color: 'white',
              fontFamily: 'sans',
            }}>
            Add to bag
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  halfScreenImage: {
    width: '100%',

    resizeMode: 'cover',
  },
  contentContainer: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 19,
    // fontVariant: ['oldstyle-nums'],
    fontFamily: 'serif',
    fontWeight: 300,
    marginBottom: 8,
  },
  price: {
    fontSize: 17,
    color: 'orange',
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    width: '100%',
    flex: 1,
  },
  cartBtn: {
    paddingHorizontal: 2,
    paddingVertical: 1,
    borderRadius: 5,
    borderColor: 'orange',
    borderWidth: 1,
  },
  reviewContainer: {
    marginTop: 15,
  },
  infoContainer: {flex: 1},
  infoTab: {},
  infoActiveTabText: {
    backgroundColor: '#fff3e0',
    color: 'orange',
  },
  infoTabText: {
    fontSize: 16,
    fontWeight: 600,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    color: 'grey',
  },
  infoActiveText: {
    paddingTop: 10,
    paddingHorizontal: 8,
    lineHeight: 21,
    fontSize: 16,
    fontFamily: 'sans',
    color: '#9c9c9c',
  },
});
