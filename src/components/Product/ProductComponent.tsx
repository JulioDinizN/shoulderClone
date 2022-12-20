import {Dimensions, Image, Text, View} from 'react-native';
import {Product} from '../../types';
import {formatCurrency} from '../../utils';

export const ProductComponent = ({productInfo}: {productInfo: Product}) => {
  return (
    <View
      style={{
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <Image
        style={{
          width: '100%',
          height: '70%',
          resizeMode: 'contain',
        }}
        source={{
          uri: 'https://media1.popsugar-assets.com/files/thumbor/GdR-Nzku1V4JOSe3fMucC_MHRdY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/03/23/826/n/1922564/296a9bb066520add_09/i/ASOS-Model-Same-Clothing-Item-Different-Body-Types.jpg',
        }}
      />
      <Text>{productInfo.title}</Text>
      <Text>{formatCurrency(productInfo.price)}</Text>
    </View>
  );
};
