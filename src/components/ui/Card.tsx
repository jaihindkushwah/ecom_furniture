import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface CardProps extends React.ComponentProps<typeof View> {
  title: string;
}
const Card = React.forwardRef(
  ({style, ...props}: CardProps, ref: React.Ref<View>) => {
    const image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRO9fKI2pCa-nObc2eFOkVAdRbecVEHxrvg&s';

    return (
      <View ref={ref} style={[styles.container, style]} {...props}>
        <Text style={styles.title}>{props.title}</Text>
        <Image
          source={{uri: image}} // Replace with your chair image URL
          style={styles.image}
        />
      </View>
    );
  },
);
export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: 160,
    height: 75,
    margin: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 5,
    backgroundColor: '#F5F5F5', // Light background color
    shadowColor: '#000',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Android shadow
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: 120,
    height: '100%',
    resizeMode: 'contain',
  },
});
