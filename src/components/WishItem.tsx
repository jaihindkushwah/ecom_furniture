import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface WishItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
export default function WishItem(item: WishItemProps) {
  return (
    <View key={item.id} style={styles.card}>
      <Image
        source={{uri: item.image}}
        style={{
          width: '100%',
          height: 120,
          resizeMode: 'cover',
          borderRadius: 8,
        }}
      />
      <Text style={styles.itemName}>{item.name}</Text>

      <View style={styles.row}>
        <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            colors={['#fc750d', 'orange']}
            style={styles.gradient}>
            <Text style={styles.buttonText}>Remove</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <LinearGradient
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            colors={['#342dfc', '#0702a1']}
            style={styles.gradient}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginVertical: 10,
    width: '100%',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
    fontFamily: 'serif',
    marginTop: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    width: '100%',
    flex: 1,
  },
  itemPrice: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 13,
    color: '#652555',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
