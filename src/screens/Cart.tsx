import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {bulkAddToCart, clearCart, getCartState} from 'store/cartSlice';
import {TextInput} from 'react-native-gesture-handler';
import CartItemList from 'components/CartItemList';
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

const cartItems: ICartItemProps[] = [
  {
    id: 1,
    title: 'Sofa',
    image: 'https://damroimages.blob.core.windows.net/damroimages/10868-1.jpg',
    quantity: 1,
    price: 499.99,
    currency: 'USD',
  },
  {
    id: 2,
    title: 'Chair',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_l-hJ6K28lcS-G_1o_gFBnL-UbNHgs07Ww&s',
    quantity: 2,
    price: 99.99,
    currency: 'USD',
  },
  {
    id: 3,
    title: 'King Bed',
    image:
      'https://www.nilkamalfurniture.com/cdn/shop/products/MARTHURSBWOSTRWNT-1_600x.jpg?v=1645000606',
    quantity: 1,
    price: 899.99,
    currency: 'USD',
  },
  {
    id: 4,
    title: 'Dining Table',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ijmsdopvQkiSVjYAY69TrEcN53U_Tb4nbg&s',
    quantity: 1,
    price: 299.99,
    currency: 'USD',
  },
  {
    id: 5,
    title: 'Computer Desk',
    image:
      'https://m.media-amazon.com/images/I/91vHzMdE4sL._AC_UF894,1000_QL80_.jpg',
    quantity: 1,
    price: 199.99,
    currency: 'USD',
  },
  {
    id: 6,
    title: 'Spring Mattress',
    image:
      'https://www.loomandneedles.com/images/product/169/ReactiveDualComfortOrthopaedicMediumFirmMattressRedesign1.jpg',
    quantity: 1,
    price: 349.99,
    currency: 'USD',
  },
];

export default function Cart() {
  const {items, total} = useSelector(getCartState);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart());
    dispatch(bulkAddToCart(cartItems));
  }, []);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    // Cleanup function to remove listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const onRefresh = () => {
    dispatch(clearCart());
    dispatch(bulkAddToCart(cartItems));
  };
  const handleCheckOut = useCallback(() => {
    Alert.alert(
      'Alert!',
      `Your order has been placed with\n total amount $${total.toFixed(
        2,
      )},\n Thank you for shopping with us`,
    );
  }, [total]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        backgroundColor: 'white',
        position: 'relative',
        flex: 1,
        paddingBottom: isKeyboardVisible ? 40 : 80,
      }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 15, paddingVertical: 10}}>
          <Text style={styles.cartHeaderText}>My Shopping Bag</Text>
        </View>
        <CartItemList data={items} />
        <Separator />
        <View style={styles.couponContainer}>
          <TextInput style={styles.couponInput} />
          <TouchableOpacity style={styles.couponBtn}>
            <Text style={styles.couponBtnText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <Separator />
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
          {/* <View> */}
          <FavouriteList />
          {/* </View> */}
        </View>
      </ScrollView>
      {!isKeyboardVisible ? (
        <View style={styles.checkoutContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.checkoutTotalText}>Total</Text>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 18,
                fontFamily: 'serif',
                color: 'orange',
              }}>
              ${total.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleCheckOut}
            disabled={items.length === 0}
            style={styles.checkoutBtn}>
            <Text style={styles.checkoutBtnText}>Proceed To Checkout</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  cartHeaderText: {
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'serif',
    paddingTop: 30,
    paddingBottom: 20,
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
  },
  checkoutTotalText: {
    fontWeight: 'condensed',
    fontSize: 12,
    fontFamily: 'serif',
    color: 'grey',
  },
  checkoutBtn: {
    padding: 10,
    flex: 0.7,
    borderRadius: 10,
    backgroundColor: 'black',
    borderWidth: 1,
  },
  checkoutBtnText: {
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'serif',
    color: 'white',
    textAlign: 'center',
  },
  couponContainer: {
    // flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    columnGap: 10,
  },
  couponInput: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  couponBtn: {
    padding: 10,
    flex: 0.3,
    borderRadius: 10,
    backgroundColor: 'black',
    borderWidth: 1,
  },
  couponBtnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
  },
});
