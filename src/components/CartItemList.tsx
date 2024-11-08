import {View, Text} from 'react-native';
import React from 'react';
import CartItem, {CartItemProps} from './CartItem';

interface ICartItemsListProps {
  data: CartItemProps[];
}
export default function CartItemList({data}: ICartItemsListProps) {
  return (
    <>
      {data.map((item, index) => (
        <View
          key={item.id + item.title}
          style={{paddingHorizontal: 15, rowGap: 10, paddingVertical: 7}}>
          <CartItem {...item} />
          {data.length - 1 != index ? (
            <View
              style={{
                height: 0.6,
                backgroundColor: 'grey',
                marginVertical: 10,
              }}
            />
          ) : null}
        </View>
      ))}
    </>
  );
}
