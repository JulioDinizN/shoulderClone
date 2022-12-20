import {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {formatCurrency} from '../../utils/index';
import {Product} from '../../types';
import {
  fetchProductsByPage,
  setFirstLoad,
} from '../../redux/reducers/product/productReducer';
import { translate } from '../../localization/services';
import { LocalizedText } from '../../components/LocalizedText/LocalizedText';
import { ProductComponent } from '../../components/Product/ProductComponent';

export function HomeScreen() {
  const [page, setPage] = useState(1);
  const {products, loading, isPaginationEnd, isFirstLoad} = useAppSelector(
    state => state.products,
  );
  const dispatch = useAppDispatch();

  const productsLength = products.length;

  useEffect(() => {
    if (page == 1) {
      dispatch(setFirstLoad(true));
    }
    dispatch(fetchProductsByPage(page));
  }, [page]);

  const fetchMoreData = () => {
    if (!isPaginationEnd && !loading) {
      setPage(previousPage => previousPage + 1);
    }
  };

  const renderFooter = () => (
    <View style={style.footerText}>
      {loading && <ActivityIndicator />}
      {isPaginationEnd && <LocalizedText textKey="paginationEnd"></LocalizedText>}
    </View>
  );

  const renderEmpty = () => (
    <View style={style.emptyText}>
      <Text>{translate("paginationEnd")}</Text>
      <Button
        onPress={() => dispatch(fetchProductsByPage(1))}
        title="Refresh"
      />
    </View>
  );

  return (
    <SafeAreaView style={{display: 'flex', height: '100%'}}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 15,
          display: 'flex',
          paddingHorizontal: 10,
          height: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <Text>{productsLength} {translate("itemsDisplay")}</Text>
        </View>
      </View>
      {(isFirstLoad || products.length == 0) ? (
        <View style={style.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <ProductComponent key={item._id} productInfo={item} />
          )}
          numColumns={2}
          ListFooterComponent={renderFooter}
          onEndReached={fetchMoreData}
          ListEmptyComponent={renderEmpty}
          onEndReachedThreshold={0.1}
        />
      )}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  emptyText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
