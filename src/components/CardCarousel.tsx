import * as React from 'react';
import {Dimensions, Image, Pressable, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const images: {uri: string; title: string; discount: string}[] = [
  {
    uri: 'https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg',
    title: 'Sofa',
    discount: '70%',
  },
  {
    uri: 'https://renjithassociates.com/wp-content/uploads/2021/03/Things-To-Keep-In-Mind-While-Designing-A-Bedroom-Renjith-Associates-1-1024x819.jpeg',
    title: 'Bed',
    discount: '20%',
  },

  {
    uri: 'https://www.sundays-company.com/cdn/shop/files/DIN-BC-008-050-0_CL1_Hero.jpg?v=1726593744&width=1900',
    title: 'Table',
    discount: '40%',
  },
  {
    uri: 'https://www.worldfurnitureonline.com/wp-content/uploads/2023/01/World-Furniture-Online_124.jpg',
    title: 'Chair',
    discount: '50%',
  },
];
function CardCarousel() {
  const width = Dimensions.get('window').width;

  // Array of image URLs

  return (
    <Carousel
      loop
      width={width}
      height={width / 2}
      autoPlay={true}
      data={images}
      scrollAnimationDuration={2000}
      renderItem={({item, index}) => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Image
            source={{uri: item.uri}}
            style={{
              width: '95%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 8,
            }}
          />

          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'flex-start',
              backgroundColor: 'transparent',
              borderRadius: 8,
              paddingLeft: 10,
              rowGap: 5,
              maxWidth: 140,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#525252',
                fontWeight: '500',
                textAlign: 'left',
              }}>
              High Quality {item.title} Started
            </Text>
            <Text
              style={{
                color: '#0a0a09',
                textAlign: 'center',
                fontSize: 16,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>
                {item.discount}
              </Text>
              &nbsp;&nbsp;off
            </Text>
            <Pressable style={{marginRight: 10, flexDirection: 'row'}}>
              <Text style={{fontSize: 14, color: 'black'}}>See all</Text>
              {/* <Text>See all</Text> */}
              <MaterialIcon name="arrow-right-alt" size={20} />
            </Pressable>
          </View>
        </View>
      )}
    />
  );
}

export default CardCarousel;
