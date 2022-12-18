import {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {getProducts} from '../../api/services';
import {formatCurrency} from '../../utils/index';

type RequestResponse = {
  data: Product[];
  message: string;
  metadata: {
    currentPage: number;
    nextPage: number;
    totalPages: number;
    totalProducts: number;
  };
  status: number;
};

type Product = {
  _id: string;
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  createdAt: Date;
  createdBy: {
    _id: string;
    name: string;
    role: string;
  };
  description: string;
  image: string;
  price: number;
  slug: string;
  title: string;
  updatedAt: Date;
};

export function HomeScreen() {
  const count = useAppSelector(state => state.products.products);
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  const productsLength = products.length;

  useEffect(() => {
    getProducts(1).then(data => {
      console.log(data.data);
      setProducts(data.data.data);
    });
  }, []);

  return (
    <SafeAreaView
      style={{backgroundColor: 'red', display: 'flex', height: '100%'}}>
      <View
        style={{
          backgroundColor: 'gray',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <View
          style={{
            backgroundColor: 'yellow',
            display: 'flex',
            paddingHorizontal: 10,
            height: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{}}>
            <Text>{productsLength} itens</Text>
          </View>
          <View style={{}}>
            <Text>Sort</Text>
          </View>
        </View>
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ProductComponent key={item._id} productInfo={item} />
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const ProductComponent = ({productInfo}: {productInfo: Product}) => {
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
