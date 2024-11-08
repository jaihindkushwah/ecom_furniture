import React from 'react';
import FavouriteCard from './ui/FavouriteCard';
import {View} from 'react-native';

interface IFavouriteListProps {
  items?: {uri: string; title: string; id: string}[];
}
const images: {uri: string; title: string; id: string}[] = [
  {
    uri: 'https://damroimages.blob.core.windows.net/damroimages/10868-1.jpg',
    title: 'Sofa',
    id: '1a',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_l-hJ6K28lcS-G_1o_gFBnL-UbNHgs07Ww&s',
    title: 'Chair',
    id: '2a',
  },
  {
    uri: 'https://www.nilkamalfurniture.com/cdn/shop/products/MARTHURSBWOSTRWNT-1_600x.jpg?v=1645000606',
    title: 'King Bed',
    id: '3a',
  },
  {
    title: 'Dining Table',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ijmsdopvQkiSVjYAY69TrEcN53U_Tb4nbg&s',
    id: '4a',
  },
  {
    title: 'Computer Desk',
    uri: 'https://m.media-amazon.com/images/I/91vHzMdE4sL._AC_UF894,1000_QL80_.jpg',
    id: '5a',
  },
  {
    title: 'Spring Mattress',
    uri: 'https://www.loomandneedles.com/images/product/169/ReactiveDualComfortOrthopaedicMediumFirmMattressRedesign1.jpg',
    id: '6a',
  },
];
function FavouriteList({items}: IFavouriteListProps) {
  items = items || images;
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        columnGap: 15,
        rowGap: 10,
        paddingHorizontal: 15,
        marginRight: 5,
      }}>
      {images.map((item, index) => (
        <View key={index} style={{width: '47%'}}>
          <FavouriteCard id={item.id} uri={item.uri} />
        </View>
      ))}
    </View>
  );
}

export default FavouriteList;
