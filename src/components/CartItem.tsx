import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeFromCart,
} from 'store/cartSlice';

export interface CartItemProps {
  id: number;
  title: string;
  image: string;
  quantity: number;
  price: number;
  currency: string;
}

export default function CartItem(item: CartItemProps) {
  const dispatch = useDispatch();
  const handleIncrementQuantity = useCallback(() => {
    if (item.quantity < 10) {
      dispatch(incrementCartItemQuantity({id: item.id, price: item.price}));
    } else {
      Alert.alert('Alert!', 'Quantity cannot be greater than 10');
    }
  }, [item.quantity]);
  const handleDecrementQuantity = useCallback(() => {
    if (item.quantity > 1) {
      dispatch(decrementCartItemQuantity({id: item.id, price: item.price}));
    } else {
      Alert.alert('Alert!', 'Quantity cannot be less than 1');
    }
  }, [item]);

  const removeFromCartHandler = useCallback(() => {
    dispatch(
      removeFromCart({id: item.id, price: item.price, quantity: item.quantity}),
    );
  }, [item]);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        flex: 1,
      }}>
      <Image source={{uri: item.image}} width={120} height={75} />
      <View style={{flex: 1, rowGap: 8}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>
          <TouchableOpacity
            onPress={removeFromCartHandler}
            style={[styles.cartBtn, {borderRadius: 12, paddingVertical: 2}]}>
            <MaterialIcons name="close" size={16} color="orange" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: 'condensedBold',
            fontSize: 12,
            color: 'grey',
          }}>
          Qty: {item.quantity}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 15,
            }}>
            <TouchableOpacity
              onPress={handleDecrementQuantity}
              style={styles.cartBtn}>
              <MaterialIcons name="remove" size={16} color="orange" />
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity
              onPress={handleIncrementQuantity}
              style={styles.cartBtn}>
              <MaterialIcons name="add" size={16} color="orange" />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 16}}>
            ${item.price}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cartBtn: {
    paddingHorizontal: 2,
    paddingVertical: 1,
    borderRadius: 5,
    borderColor: 'orange',
    borderWidth: 1,
  },
});
