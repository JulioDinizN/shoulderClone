import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {setMessage} from '../../redux/reducers/product/productReducer';

export function HomeScreen() {
  const count = useAppSelector(state => state.products.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMessage('2'));
  }, []);

  console.log(count);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}
